package com.anik.ipldashboard.data.batch;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.anik.ipldashboard.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

	private static final Logger logger = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

	// private final JdbcTemplate jdbcTemplate;
	private final EntityManager em;

	@Autowired
	public JobCompletionNotificationListener(EntityManager em) {
		this.em = em;
	}
	/*
	 * public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
	 * this.jdbcTemplate = jdbcTemplate; }
	 */

	@Override
	@Transactional
	public void afterJob(JobExecution jobExecution) {
		if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
			logger.info("!!! JOB FINISHED! Time to verify the results");

			Map<String, Team> teamData = em.createQuery("select m.firstInnTeam, count(*) from Match m group by m.firstInnTeam", Object[].class)
					.getResultList().stream()
					.map(res -> new Team((String) res[0], (long) res[1]))
					.collect(Collectors.toMap(Team::getTeamName, Function.identity()));
					//.forEach(team -> teamData.put(team.getTeamName(), team));
			
			for (Entry<String, Team> entry : teamData.entrySet()) {
			    System.out.println(entry.getKey() + "/" + entry.getValue().getTotalMatches());
			}
			
			Map<String, Team> teamData2 = em.createQuery("select m.secondInnTeam, count(*) from Match m group by m.secondInnTeam", Object[].class)
					.getResultList().stream()
					.map(res -> new Team((String) res[0], (long) res[1]))
					.collect(Collectors.toMap(Team::getTeamName, Function.identity()));
			
			teamData.forEach((key,val) -> teamData2.merge(key, val, (v1,v2)-> {
				long totalMatch = v1.getTotalMatches()+v2.getTotalMatches();
				return new Team(v1.getTeamName(), totalMatch);
			}));
			
			for (Entry<String, Team> entry : teamData2.entrySet()) {
			    System.out.println("Team2 " + entry.getKey() + "=" + entry.getValue().getTotalMatches());
			}
			/*
			 * em.
			 * createQuery("select m.secondInnTeam, count(*) from Match m group by m.secondInnTeam"
			 * , Object[].class) .getResultList().stream() .forEach(res -> { Team team =
			 * teamData.get((String) res[0]); if(team != null) {
			 * team.setTotalMatches(team.getTotalMatches() + (long) res[1]); } });
			 */
			
			List<Object[]> winnerData = em.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
					.getResultList();
			
			winnerData.forEach(winner -> {
				teamData2.computeIfPresent((String) winner[0], (key,val) -> {
					val.setTotalWins((long) winner[1]);
					return val;
				});
			});
			
			/*
			 * em.
			 * createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner"
			 * , Object[].class) .getResultList().stream() .forEach(res -> {
			 * //System.out.println(res[0] + " " + res[1]); Team team =
			 * teamData.get((String) res[0]); if(team != null) { team.setTotalWins((long)
			 * res[1]); } });
			 */
			
			teamData2.values().forEach(team -> em.persist(team));

			em.createQuery("select m.teamName,m.totalMatches,m.totalWins from Team m", Object[].class)
					.getResultList().stream()
					.forEach(res -> {
						System.out.println("T " +res[0]+" M "+res[1]+" W "+res[2]);
					});
			/*
			 * jdbcTemplate.query("SELECT first_inn_team, second_inn_team, date FROM match",
			 * (rs, row) -> "Team1 " + rs.getString(1) + " Team2 " + rs.getString(2) +
			 * " Date " + rs.getString(3)) .forEach(str -> logger.info("Found > " + str));
			 */

		}
	}
}
