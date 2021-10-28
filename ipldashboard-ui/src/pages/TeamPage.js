import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LastMatch } from "../components/LastMatch";
import { OtherMatch } from "../components/OtherMatch";
import { WinLoss } from "../components/WinLoss";

import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({});
  const { teamName } = useParams();

  const latestYear = process.env.REACT_APP_DATA_END_YEAR;

  useEffect(() => {
    const fetchMatches = async () => {
      //const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const response = await fetch(`/team/${teamName}`);
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  return (
    <div className="TeamPage">
      {team && team.allMatches && team.allMatches.length > 0 ? (
        <>
          <div className="team-name-section">
            <h1 className="team-name">{team.teamName}</h1>
          </div>
          <div className="win-loss-section">
            <WinLoss team={team} />
          </div>
          <div className="last-match-section">
            <h3 style={{ marginBottom: "10px" }}>Last Match</h3>
            <LastMatch teamName={team.teamName} match={team.allMatches[0]} />
          </div>
          {team.allMatches.slice(1).map((match) => (
            <OtherMatch key={match.id} teamName={team.teamName} match={match} />
          ))}
          <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${latestYear}`}>
              See More
            </Link>
          </div>
        </>
      ) : (
        <h1>Team not found!!</h1>
      )}
    </div>
  );
};
