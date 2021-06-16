const ProgressCard = ({ width, bgColor, profilePic, title }) => {
  return (
    <div className="flex w-full mt-8">
      <img
        className={`${bgColor} w-10 h-10 rounded-full mr-4`}
        src={`./img/${profilePic}.png`}
        alt=""
      />
      <div className="w-full">
        <div className="flex justify-between font-medium">
          <p className="text-sm">{title}</p>
          <p className="text-xs text-blue-200">{width}%</p>
        </div>
        <div className="relative pt-1 mt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-50">
            <div
              style={{ width: `${width}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-blue"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
