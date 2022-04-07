import { useContext } from "react";
import { TeamsContext } from "../App";
import { Team } from "../components/Team";
import "./HomePage.scss";

export const HomePage = () => {
  const [teams, setTeams] = useContext(TeamsContext);

  return (
    <div className="HomePage">
      <div className="team-grid">
        {teams &&
          teams.length > 0 &&
          teams.map((team) => <Team key={team.id} teamName={team.teamName} />)}
      </div>
    </div>
  );
};
