import "./App.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";
import { createContext, useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";

export const TeamsContext = createContext();

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      //const response = await fetch("http://localhost:5000/team");
      const response = await fetch("/team");
      let data = await response.json();

      // Adjust team renaming
      let dd = data.find((d) => d.teamName === "Delhi Daredevils");
      let dc = data.find((d) => d.teamName === "Deccan Chargers");
      let kp = data.find((d) => d.teamName === "Kings XI Punjab");
      data.forEach((d) => {
        if (d.teamName === "Delhi Capitals") {
          d.totalMatches += dd.totalMatches;
          d.totalWins += dd.totalWins;
        }
        if (d.teamName === "Sunrisers Hyderabad") {
          d.totalMatches += dc.totalMatches;
          d.totalWins += dc.totalWins;
        }
        if (d.teamName === "Punjab Kings") {
          d.totalMatches += kp.totalMatches;
          d.totalWins += kp.totalWins;
        }
      });
      data = data.filter(
        (d) =>
          d.teamName !== "Delhi Daredevils" &&
          d.teamName !== "Deccan Chargers" &&
          d.teamName !== "Kings XI Punjab"
      );

      console.log(data);
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <div className="App">
      <TeamsContext.Provider value={[teams, setTeams]}>
        <Router>
          <div className="header-section">
            <Link to={`/`}>
              <h1 className="app-name">IPL Dashboard</h1>
            </Link>
            <SearchBar />
          </div>
          <Switch>
            <Route exact path="/teams/:teamName">
              <TeamPage />
            </Route>
            <Route exact path="/teams/:teamName/matches/:year">
              <MatchPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </TeamsContext.Provider>
    </div>
  );
}

export default App;
