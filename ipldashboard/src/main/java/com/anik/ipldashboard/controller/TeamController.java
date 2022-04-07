package com.anik.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.anik.ipldashboard.model.Match;
import com.anik.ipldashboard.model.Team;
import com.anik.ipldashboard.repository.MatchRepository;
import com.anik.ipldashboard.repository.TeamRepository;

// Launch in 5000 port due to application.properties for Heroku

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {

	private TeamRepository teamRepo;
	private MatchRepository matchRepo;

	@Autowired
	public TeamController(TeamRepository teamRepo, MatchRepository matchRepo) {
		this.teamRepo = teamRepo;
		this.matchRepo = matchRepo;
	}
	
	@GetMapping("/team")
	public List<Team> getTeam() {
		return teamRepo.findAll(Sort.by(Sort.Direction.ASC, "teamName"));
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = teamRepo.findByTeamNameContaining(teamName).orElse(new Team());
		team.setAllMatches(matchRepo.findLatestMatchesByTeam(teamName, 4));
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
		LocalDate dateStart = LocalDate.of(year, 1, 1);
		LocalDate dateEnd = LocalDate.of(year+1, 1, 1);
		List<Match> match=matchRepo.findByYear(teamName, teamName, dateStart, dateEnd);
		System.out.println("Match "+match);
		return match;
	}
}
