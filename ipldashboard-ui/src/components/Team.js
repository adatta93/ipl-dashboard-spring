import { Link } from "react-router-dom";
import "./Team.scss";

export const Team = ({ teamName }) => {
  return (
    <Link to={`/teams/${teamName}`}>
      <div className="Team">
        <img
          src={`/logos/${teamName}-Logo.png`}
          alt={teamName}
          className="Team-Logo"
        />
        <h2 className="Team-Name">{teamName}</h2>
      </div>
    </Link>
  );
};
