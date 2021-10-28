import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LastMatch } from "../components/LastMatch";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      //const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
      const response = await fetch(`/team/${teamName}/matches?year=${year}`);
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3 className="choose-year">Choose year: </h3>
        <YearSelector teamName={teamName} selectedYear={year} />
      </div>
      <div>
        <h1 className="match-page-header">
          {teamName} matches in {year}
        </h1>
        {matches && matches.length > 0 ? (
          matches.map((match) => (
            <LastMatch key={match.id} teamName={teamName} match={match} />
          ))
        ) : (
          <h1>No match found</h1>
        )}
      </div>
    </div>
  );
};
