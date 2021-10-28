package com.anik.ipldashboard.data;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import com.anik.ipldashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchDataInput, Match> {

	private static final Logger logger = LoggerFactory.getLogger(MatchDataProcessor.class);

	@Override
	public Match process(MatchDataInput matchInput) throws Exception {

		Match match = new Match();

		match.setId(Long.parseLong(matchInput.getId()));
		match.setCity(matchInput.getCity());
		match.setDate(LocalDate.parse(matchInput.getDate()));
		match.setPlayerOfMatch(matchInput.getPlayer_of_match());
		match.setVenue(matchInput.getVenue());

		// Convert 0 or 1 to boolean
		boolean neutralVenue = matchInput.getNeutral_venue() == "1" ? true : false;
		match.setNeutralVenue(neutralVenue);
		logger.info("VEN " + neutralVenue + " " + matchInput.getNeutral_venue());

		// Set first batting team as First Innings Team and vice-versa
		String firstInnTeam, secondInnTeam;
		if ("bat".equals(matchInput.getToss_decision())) {
			firstInnTeam = matchInput.getToss_winner();
			secondInnTeam = (matchInput.getToss_winner().equals(matchInput.getTeam1())) ? matchInput.getTeam2()
					: matchInput.getTeam1();
		} else {
			secondInnTeam = matchInput.getToss_winner();
			firstInnTeam = (matchInput.getToss_winner().equals(matchInput.getTeam1())) ? matchInput.getTeam2()
					: matchInput.getTeam1();
		}
		match.setFirstInnTeam(firstInnTeam);
		match.setSecondInnTeam(secondInnTeam);

		match.setTossWinner(matchInput.getToss_winner());
		match.setTossDecision(matchInput.getToss_decision());
		match.setMatchWinner(matchInput.getWinner());
		match.setResult(matchInput.getResult());

		// Convert winning margin to Integer if possible
		int winMargin;
		try {
			winMargin = Integer.parseInt(matchInput.getResult_margin());
		} catch (NumberFormatException e) {
			winMargin = 0;
		}
		match.setResultMargin(winMargin);

		// Convert eliminator to boolean from ("Y","N","NA")
		boolean eliminator = "Y".equals(matchInput.getEliminator()) ? true : false;
		logger.info("ELIM " + eliminator + " " + matchInput.getEliminator());
		match.setEliminator(eliminator);

		match.setMethod(matchInput.getMethod());
		match.setUmpire1(matchInput.getUmpire1());
		match.setUmpire2(matchInput.getUmpire2());

		logger.info("Converting MatchDataInput to Match");
		return match;
	}

}
