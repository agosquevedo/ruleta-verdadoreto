import "../styles/ChallengeCard.css";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="card">
      <h2>{challenge.text}</h2>
    </div>
  );
};

export default ChallengeCard;
