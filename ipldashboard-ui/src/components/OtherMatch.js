import { Link } from "react-router-dom";
import "./OtherMatch.scss";

export const OtherMatch = ({ teamName, match }) => {
  const otherTeam =
    teamName === match.firstInnTeam ? match.secondInnTeam : match.firstInnTeam;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div
      className={isMatchWon ? "OtherMatch won-card" : "OtherMatch lost-card"}>
      <small className="vs">vs</small>
      <h2>
        <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
      </h2>
      <h4 className="match-result">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h4>
    </div>
  );
};
