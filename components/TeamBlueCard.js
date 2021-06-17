import ProgressBar from "@ramonak/react-progress-bar";

const TeamBlueCard = (props) => {
  return (
    <div className="progress-container mt-14">
      <h2 className="progress-title text-xl font-bold text-gray">
        Hi, Emilia S.
      </h2>
      <p className="progress-text text-base text-gray mb-3">
        6 meetings to finish this week!
      </p>
      <ProgressBar completed={60} />
    </div>
  );
};

export default TeamBlueCard;
