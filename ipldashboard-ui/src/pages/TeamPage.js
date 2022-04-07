import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LastMatch } from "../components/LastMatch";
import { OtherMatch } from "../components/OtherMatch";
import { TeamBanner } from "../components/TeamBanner";
import { TeamList } from "../components/TeamList";
import { WinLoss } from "../components/WinLoss";

import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({});
  const { teamName } = useParams();

  const latestYear = process.env.REACT_APP_DATA_END_YEAR;

  useEffect(() => {
    const fetchMatches = async () => {
      //const response = await fetch(`http://localhost:5000/team/${teamName}`);
      const response = await fetch(`/team/${teamName}`);
      const data = await response.json();
      console.log(data);

      // Handle team name change
      let oldTeamRes = null;
      let oldTeamData = null;
      if (teamName === "Delhi Capitals") {
        //oldTeamRes = await fetch(`http://localhost:5000/team/Delhi Daredevils`);
        oldTeamRes = await fetch(`/team/Delhi Daredevils`);
      } else if (teamName === "Sunrisers Hyderabad") {
        //oldTeamRes = await fetch(`http://localhost:5000/team/Deccan Chargers`);
        oldTeamRes = await fetch(`/team/Deccan Chargers`);
      } else if (teamName === "Punjab Kings") {
        //oldTeamRes = await fetch(`http://localhost:5000/team/Kings XI Punjab`);
        oldTeamRes = await fetch(`/team/Kings XI Punjab`);
      }
      if (oldTeamRes) {
        oldTeamData = await oldTeamRes.json();

        // add old name teams stats
        data.totalMatches += oldTeamData.totalMatches;
        data.totalWins += oldTeamData.totalWins;
      }

      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  return (
    <>
      <TeamList />

      <div className="TeamPage">
        {team && team.allMatches && team.allMatches.length > 0 ? (
          <>
            <div className="team-name-section">
              <TeamBanner teamName={team.teamName} />
            </div>
            <div className="win-loss-section">
              <WinLoss team={team} />
            </div>
            <div className="last-match-section">
              <h3 style={{ marginBottom: "10px" }}>Last Match</h3>
              <LastMatch teamName={team.teamName} match={team.allMatches[0]} />
            </div>
            {team.allMatches.slice(1).map((match) => (
              <OtherMatch
                key={match.id}
                teamName={team.teamName}
                match={match}
              />
            ))}
            <Link
              className="more-link"
              to={`/teams/${teamName}/matches/${latestYear}`}>
              See More
            </Link>
          </>
        ) : (
          <h1>Team not found!!</h1>
        )}
      </div>
    </>
  );
};
