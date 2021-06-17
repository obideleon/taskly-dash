const RankCard = ({
  name,
  rank,
  task,
  hours,
  score,
  totalScore,
  profilePic,
}) => (
  <tr>
    <td className="pt-4 pb-2">
      <img
        className="w-8 h-8 mr-3 rounded-full inline bg-orange-100"
        src={`./img/${profilePic}.png`}
        alt={name}
      />
      <span className="text-sm font-medium text-gray-100">{name}</span>
    </td>
    <td className="text-center">
      <p className="text-sm text-gray-100">{rank}</p>
    </td>
    <td className="text-center hidden sm:table-cell">
      <p className="text-sm text-gray-100">{task}</p>
    </td>
    <td className="text-center hidden sm:table-cell">
      <p className="text-sm text-gray-100">{hours}</p>
    </td>
    <td className="text-center hidden sm:table-cell">
      <p
        className={`text-sm font-medium ${
          Number(score) > 0 ? "text-blue" : "text-orange"
        }`}
      >
        {score}
      </p>
    </td>
    <td className="text-center">
      <p
        className={`text-sm font-medium ${
          Number(totalScore) > 0 ? "text-blue" : "text-orange"
        }`}
      >
        {totalScore}
      </p>
    </td>
  </tr>
);

export default RankCard;
