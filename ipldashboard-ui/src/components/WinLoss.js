import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
//import { useAnimateProps } from "react-animate-props";

export const WinLoss = ({ team }) => {
  const [totalLosses, setTotalLosses] = useState(0);
  //todo
  /* const animatedValue1 = useAnimateProps(value1, {
    delay: 500,
    duration: 300,
  });*/

  useEffect(() => {
    setTotalLosses(team.totalMatches - team.totalWins);
  }, [team]);

  return (
    <>
      <span style={{ marginBottom: "10px" }}>
        Total - {team.totalMatches} | Wins - {team.totalWins} | Losses -
        {totalLosses}
      </span>
      <PieChart
        data={[
          {
            title: "Losses " + totalLosses,
            value: totalLosses,
            color: "#9a3145",
          },
          {
            title: "Wins " + team.totalWins,
            value: team.totalWins,
            color: "#1c7043",
          },
        ]}
      />
    </>
  );
};
