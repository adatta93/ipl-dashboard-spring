import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LastMatch } from "../components/LastMatch";
import { YearSelector } from "../components/YearSelector";
import { TeamList } from "../components/TeamList";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);
  const { teamName, year } = useParams();
  const [teamActualName, setTeamActualName] = useState(teamName);

  useEffect(() => {
    const fetchMatches = async () => {
      let team = teamName;
      // handle team name change
      if (teamName === "Delhi Capitals" && year < 2019) {
        team = "Delhi Daredevils";
      } else if (teamName === "Sunrisers Hyderabad" && year < 2013) {
        team = "Deccan Chargers";
      } else if (teamName === "Punjab Kings" && year < 2021) {
        team = "Kings XI Punjab";
      }
      setTeamActualName(team);

      //const response = await fetch(`http://localhost:5000/team/${team}/matches?year=${year}`);
      const response = await fetch(`/team/${team}/matches?year=${year}`);
      const data = await response.json();
      console.log(data);
      setMatches(data);

      // calculate win and loss count
      setWinCount(0);
      setLossCount(0);
      data.forEach((d) => {
        if (team === d.matchWinner) {
          setWinCount((prev) => prev + 1);
        } else {
          setLossCount((prev) => prev + 1);
        }
      });
    };
    fetchMatches();
  }, [teamName, year]);

  return (
    <>
      <TeamList />
      <div className="MatchPage">
        <div className="year-selector">
          <h3 className="choose-year">Choose year: </h3>
          <YearSelector teamName={teamName} selectedYear={year} />
        </div>
        <div>
          <h1 className="match-page-header">
            {teamName} <small>matches in</small> {year}
          </h1>

          <div className="win-loss-counter">
            <div className="total-count">
              Total - {matches && matches.length}
            </div>
            <div className="win-count">Win - {winCount}</div>
            <div className="loss-count">Loss - {lossCount}</div>
          </div>

          {matches && matches.length > 0 ? (
            matches.map((match) => (
              <LastMatch
                key={match.id}
                teamName={teamActualName}
                match={match}
              />
            ))
          ) : (
            <h1>No match found</h1>
          )}
        </div>
      </div>
    </>
  );
};
