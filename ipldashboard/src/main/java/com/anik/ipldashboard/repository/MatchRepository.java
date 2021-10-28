package com.anik.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.anik.ipldashboard.model.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {

	List<Match> findByFirstInnTeamOrSecondInnTeamOrderByDateDesc(String teamName1, String teamName2, Pageable pageable);
	
	@Query("from Match where (first_inn_team=?1 or second_inn_team=?2) and date between ?3 and ?4")
	List<Match> findByYear(String teamName1, String teamName2, LocalDate dateStart, LocalDate dateEnd);
	
	default List<Match> findLatestMatchesByTeam(String teamName, int count) {
		return findByFirstInnTeamOrSecondInnTeamOrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
	}
}
