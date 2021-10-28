package com.anik.ipldashboard.data.batch;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.hsqldb.util.DatabaseManagerSwing;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.ClassPathResource;

import com.anik.ipldashboard.data.MatchDataInput;
import com.anik.ipldashboard.data.MatchDataProcessor;
import com.anik.ipldashboard.model.Match;

@Configuration
@Import({ DataSourceConfig.class })
@EnableBatchProcessing
public class BatchConfiguration {

	private static final String[] FIELD_NAMES = new String[] { "id", "city", "date", "player_of_match", "venue",
			"neutral_venue", "team1", "team2", "toss_winner", "toss_decision", "winner", "result", "result_margin",
			"eliminator", "method", "umpire1", "umpire2" };

	@Autowired
	public JobBuilderFactory jobBuilderFactory;

	@Autowired
	public StepBuilderFactory stepBuilderFactory;

	@Autowired
	DataSource dataSource;

	@Bean
	public FlatFileItemReader<MatchDataInput> reader() {
		return new FlatFileItemReaderBuilder<MatchDataInput>().name("MatchBuilder")
				.resource(new ClassPathResource("match-data.csv")).delimited().names(FIELD_NAMES).linesToSkip(1)
				.fieldSetMapper(new BeanWrapperFieldSetMapper<MatchDataInput>() {
					{
						setTargetType(MatchDataInput.class);
					}
				}).build();
	}

	@Bean
	public MatchDataProcessor processor() {
		return new MatchDataProcessor();
	}

	@Bean
	public JdbcBatchItemWriter<Match> writer() {// DataSource dataSource
		// try with JpaItemWriter instead of JdbcBatchItemWriter
		return new JdbcBatchItemWriterBuilder<Match>()
				.itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<Match>())
				.sql("INSERT INTO match (id, city, date, player_of_match, venue, neutral_venue, first_inn_team, second_inn_team, toss_winner, toss_decision, match_winner, result, result_margin, eliminator, method, umpire1, umpire2) values (:id,:city,:date,:playerOfMatch,:venue,:neutralVenue,:firstInnTeam,:secondInnTeam,:tossWinner,:tossDecision,:matchWinner,:result,:resultMargin,:eliminator,:method,:umpire1,:umpire2)")
				.dataSource(this.dataSource).build();
	}

	@Bean
	public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
		return jobBuilderFactory.get("importUserJob").incrementer(new RunIdIncrementer()).listener(listener).flow(step1)
				.end().build();
	}

	@Bean
	public Step step1(JdbcBatchItemWriter<Match> writer) {
		return stepBuilderFactory.get("step1").<MatchDataInput, Match>chunk(10).reader(reader()).processor(processor())
				.writer(writer).build();
	}

	/*
	 * @PostConstruct public void getDbManager() { DatabaseManagerSwing.main(new
	 * String[] { "--url", "jdbc:hsqldb:mem:testdb", "--user", "sa", "--password",
	 * "" }); }
	 */

}
