import { useEffect, useState } from "react";
import { Team } from "../components/Team";
import "./HomePage.scss";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      //const response = await fetch("http://localhost:8080/team");
      const response = await fetch("/team");
      const data = await response.json();
      console.log(data);
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams &&
          teams.length > 0 &&
          teams.map((team) => <Team key={team.id} teamName={team.teamName} />)}
      </div>
    </div>
  );
};
