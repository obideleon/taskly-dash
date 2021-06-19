import RankCard from "./RankCard";
import React from "react";

const Rank = () => {
  const users = [
    {
      name: "Aaseif Rahman",
      rank: "1",
      task: "32",
      hours: "32:40",
      score: "+320",
      totalScore: "9886",
      profilePic: "user-1",
    },
    {
      name: "Lexy Sanz",
      rank: "2",
      task: "28",
      hours: "28:43",
      score: "-228",
      totalScore: "3234",
      profilePic: "user-2",
    },
    {
      name: "Krawl Brown",
      rank: "3",
      task: "26",
      hours: "26:40",
      score: "-246",
      totalScore: "2836",
      profilePic: "user-3",
    },
    {
      name: "Brian Erjas",
      rank: "4",
      task: "24",
      hours: "24:56",
      score: "+320",
      totalScore: "2468",
      profilePic: "user-4",
    },
    {
      name: "Mary Estudillo",
      rank: "5",
      task: "22",
      hours: "22:44",
      score: "-226",
      totalScore: "2266",
      profilePic: "user-5",
    },
  ];

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="sm:text-xl text-sm font-medium text-gray">
          Team Ranking
        </h2>
        <p className="sm:text-sm text-xs font-medium  text-blue cursor-pointer hover:underline">
          Show All
        </p>
      </div>
      <div className="mt-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white-100 text-gray sm:text-sm text-xs text-left">
              <th className="pb-2 w-2/12 font-normal">Team Member Profile</th>
              <th className="text-center pb-2 w-1/12 font-normal">Rank</th>
              <th className="hidden sm:table-cell text-center pb-2 w-1/12 font-normal">
                Productivity
              </th>
              <th className="hidden sm:table-cell text-center pb-2 w-1/12 font-normal">
                Hours spent
              </th>
              <th className="hidden sm:table-cell text-center pb-2 w-1/12 font-normal">
                Scores
              </th>
              <th className="text-center pb-2 w-1/12 font-normal">
                Total Score
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            {users.map((user) => (
              <RankCard {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rank;
