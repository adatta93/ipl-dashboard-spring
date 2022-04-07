import { useContext } from "react";
import { Link } from "react-router-dom";
import { TeamsContext } from "../App";
import "./TeamList.scss";

export const TeamList = () => {
  const [teams, setTeams] = useContext(TeamsContext);

  return (
    <div className="team-list">
      {teams &&
        teams.length > 0 &&
        teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.teamName}`}>
            <img src={`/team-logo/${team.teamName}.png`} alt={team.teamName} />
          </Link>
        ))}
    </div>
  );
};
