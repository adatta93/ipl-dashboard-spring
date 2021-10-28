package com.anik.ipldashboard.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Match {
	
	@Id
	private long id;
	private String city;
	private LocalDate date;
	private String playerOfMatch;
	private String venue;
	private boolean neutralVenue;
	private String firstInnTeam;
	private String secondInnTeam;
	private String tossWinner;
	private String tossDecision;
	private String matchWinner;
	private String result;
	private int resultMargin;
	private boolean eliminator;
	private String method;
	private String umpire1;
	private String umpire2;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getPlayerOfMatch() {
		return playerOfMatch;
	}

	public void setPlayerOfMatch(String playerOfMatch) {
		this.playerOfMatch = playerOfMatch;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public boolean isNeutralVenue() {
		return neutralVenue;
	}

	public void setNeutralVenue(boolean neutralVenue) {
		this.neutralVenue = neutralVenue;
	}

	public String getFirstInnTeam() {
		return firstInnTeam;
	}

	public void setFirstInnTeam(String team1) {
		this.firstInnTeam = team1;
	}

	public String getSecondInnTeam() {
		return secondInnTeam;
	}

	public void setSecondInnTeam(String team2) {
		this.secondInnTeam = team2;
	}

	public String getTossWinner() {
		return tossWinner;
	}

	public void setTossWinner(String tossWinner) {
		this.tossWinner = tossWinner;
	}

	public String getTossDecision() {
		return tossDecision;
	}

	public void setTossDecision(String tossDecision) {
		this.tossDecision = tossDecision;
	}

	public String getMatchWinner() {
		return matchWinner;
	}

	public void setMatchWinner(String winner) {
		this.matchWinner = winner;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public int getResultMargin() {
		return resultMargin;
	}

	public void setResultMargin(int resultMargin) {
		this.resultMargin = resultMargin;
	}

	public boolean getEliminator() {
		return eliminator;
	}

	public void setEliminator(boolean eliminator) {
		this.eliminator = eliminator;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getUmpire1() {
		return umpire1;
	}

	public void setUmpire1(String umpire1) {
		this.umpire1 = umpire1;
	}

	public String getUmpire2() {
		return umpire2;
	}

	public void setUmpire2(String umpire2) {
		this.umpire2 = umpire2;
	}

}
