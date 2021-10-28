import { Link } from "react-router-dom";
import "./LastMatch.scss";

export const LastMatch = ({ teamName, match }) => {
  const otherTeam =
    teamName === match.firstInnTeam ? match.secondInnTeam : match.firstInnTeam;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={isMatchWon ? "LastMatch won-card" : "LastMatch lost-card"}>
      <div>
        <small className="vs">vs</small>
        <h1>
          <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
        </h1>
        <h3 className="match-date">{match.date}</h3>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h3>
      </div>
      <div className="other-detail">
        <h3>First Innings</h3>
        <p>{match.firstInnTeam}</p>
        <h3>Second Innings</h3>
        <p>{match.secondInnTeam}</p>
        <h3>Player of the Match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1},{match.umpire2}
        </p>
      </div>
    </div>
  );
};
