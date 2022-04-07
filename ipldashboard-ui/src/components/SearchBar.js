import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { TeamsContext } from "../App";
import "./SearchBar.scss";

export const SearchBar = () => {
  const [srchTerm, setSrchTerm] = useState("");
  const [teams, setTeams] = useContext(TeamsContext);
  const [srchResult, setSrchResult] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    let term = e.target.value;
    setSrchTerm(term);
    setSrchResult([]);
    if (term && term.length > 1) {
      teams.forEach((team) => {
        if (team.teamName.toLowerCase().includes(term.toLowerCase())) {
          setSrchResult((prev) => {
            if (!prev.includes(team.teamName)) {
              return [...prev, team.teamName];
            }
            return prev;
          });
        } else if (
          getShortName(team.teamName).toLowerCase() === term.toLowerCase()
        ) {
          setSrchResult((prev) => {
            if (!prev.includes(team.teamName)) {
              return [...prev, team.teamName];
            }
            return prev;
          });
        }
      });
    }
  };

  const getShortName = (teamName) => {
    let shortName = "";
    teamName.split(" ").forEach((a) => (shortName += a.charAt(0)));

    // special case for Hyderabad - SRH
    if (teamName === "Sunrisers Hyderabad") {
      shortName = "SRH";
    }

    return shortName;
  };

  const navigateToTeams = (srch) => {
    setSrchTerm("");
    setSrchResult([]);
    history.push(`/teams/${srch}`);
  };

  return (
    <div className="search-bar-container">
      <div
        className={
          "search-bar " +
          (srchResult && srchResult.length > 0 ? "result-open" : "")
        }>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          value={srchTerm}
          onChange={handleSearch}
          placeholder="Search Team.."
        />
      </div>
      {srchResult && srchResult.length > 0 && (
        <ul className="search-result">
          {srchResult.map((srch) => (
            <li key={srch} onClick={() => navigateToTeams(srch)}>
              {srch}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
