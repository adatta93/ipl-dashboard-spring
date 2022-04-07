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
        <h4 className="match-date">{match.date}</h4>
        <h5 className="match-venue">at {match.venue}</h5>
        <h4 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h4>
      </div>
      <div className="other-detail">
        <div>
          <h3>First Innings</h3>
          <p>{match.firstInnTeam}</p>
          {match.tossWinner === match.firstInnTeam && (
            <div className="toss-result">
              <img src="/coin.png" alt="toss" />
              {match.tossDecision === "field" ? (
                <img src="/ball.png" alt="field" />
              ) : (
                <img src="/bat.png" alt="bat" />
              )}
            </div>
          )}
        </div>
        <div>
          <h3>Second Innings</h3>
          <p>{match.secondInnTeam}</p>
          {match.tossWinner === match.secondInnTeam && (
            <div className="toss-result">
              <img src="/coin.png" alt="toss" />
              {match.tossDecision === "field" ? (
                <img src="/ball.png" alt="field" />
              ) : (
                <img src="/bat.png" alt="bat" />
              )}
            </div>
          )}
        </div>
        <div>
          <h3>Player of the Match</h3>
          <p>{match.playerOfMatch}</p>
        </div>
        <div>
          <h3>Umpires</h3>
          <p>
            {match.umpire1}, {match.umpire2}
          </p>
        </div>
      </div>
    </div>
  );
};
