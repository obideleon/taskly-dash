import RankCard from "./RankCard";
import React from "react";

const Rank = () => {
  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="sm:text-base text-xs text-gray-100">
          Community Ranking
        </h2>
        <p className="text-xs font-medium  text-blue cursor-pointer">
          Show All
        </p>
      </div>
      <div className="mt-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white-100">
              <th className="text-gray-50 text-xs font-normal text-left pb-2 w-2/12">
                Member Profile
              </th>
              <th className="text-gray-50 text-xs font-normal text-center pb-2 w-1/12">
                Rank
              </th>
              <th className="text-gray-50 text-xs font-normal hidden sm:table-cell text-center pb-2 w-1/12">
                Course
              </th>
              <th className="text-gray-50 text-xs font-normal hidden sm:table-cell text-center pb-2 w-1/12">
                Hours
              </th>
              <th className="text-gray-50 text-xs font-normal hidden sm:table-cell text-center pb-2 w-1/12">
                Scores
              </th>
              <th className="text-gray-50 text-xs font-normal text-center pb-2 w-1/12">
                Total Score
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            <RankCard
              name="Mahmoud Eid"
              rank="1"
              task="32"
              hours="32:40"
              score="+320"
              totalScore="9886"
              profilePic="user-1"
            />
            <RankCard
              name="Marian Nazari"
              rank="2"
              task="28"
              hours="28:43"
              score="-228"
              totalScore="3234"
              profilePic="user-2"
            />
            <RankCard
              name="Davi Silvestre"
              rank="3"
              task="26"
              hours="26:40"
              score="-246"
              totalScore="2836"
              profilePic="user-3"
            />
            <RankCard
              name="Ferdinand Rio"
              rank="4"
              task="24"
              hours="24:56"
              score="+320"
              totalScore="2468"
              profilePic="user-4"
            />
            <RankCard
              name="Christine Jason"
              rank="5"
              task="22"
              hours="22:44"
              score="-226"
              totalScore="2266"
              profilePic="user-5"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rank;
