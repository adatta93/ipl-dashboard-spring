package com.anik.ipldashboard.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.anik.ipldashboard.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

	Optional<Team> findByTeamNameContaining(String teamName); 
}
