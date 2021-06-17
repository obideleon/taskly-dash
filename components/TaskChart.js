import { Line } from "react-chartjs-2";

const TaskChart = (props) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Number of Meetings per Day",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1, 3, 2, 4, 3, 2, 3],
      },
    ],
  };

  return (
    <div className="w-80 2xl:w-80 mt-10 2xl:mt-5">
      <h2 className="chart-title text-gray text-xl font-bold mb-1">
        Attended Meeting
      </h2>
      <p className="chart-description text-sm text-green font-medium mb-10 2xl:mb-5">
        20 hours{" "}
        <span className="text-gray-50 font-normal">call on this week.</span>
      </p>
      <Line data={data} width={400} height={400} />
    </div>
  );
};

export default TaskChart;
