import { Link } from "react-router-dom";
import "./YearSelector.scss";

export const YearSelector = ({ teamName, selectedYear }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  console.log(startYear + "," + endYear);
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }
  console.log(years);

  return (
    <div className="YearSelector">
      <ol>
        {years.map((year) => (
          <li key={year}>
            <Link
              to={`/teams/${teamName}/matches/${year}`}
              className={selectedYear === year.toString() ? "active" : ""}>
              {year}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
