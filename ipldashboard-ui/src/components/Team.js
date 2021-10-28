import { Link } from "react-router-dom";
import "./Team.scss";

export const Team = ({ teamName }) => {
  return (
    <div className="Team">
      <h2>
        <Link to={`/teams/${teamName}`}>{teamName}</Link>
      </h2>
    </div>
  );
};
