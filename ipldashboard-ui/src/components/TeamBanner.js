import "./TeamBanner.scss";

export const TeamBanner = ({ teamName }) => {
  return (
    <div className="team-banner">
      <div className="team-logo">
        <img src={`/team-logo/${teamName}.png`} alt={teamName} />
      </div>
      <h1 className="team-name">{teamName}</h1>
    </div>
  );
};
