import ProgressCard from "./ProgressCard";

const Progress = () => (
  <div className="w-96 p-6 border border-white-100 rounded-xl shadow-sm">
    <div className="flex items-center justify-between font-medium">
      <h2 className="text-base">In Progress</h2>
      <p className="text-xs text-blue cursor-pointer">Show all</p>
    </div>
    <ProgressCard
      width="75"
      bgColor="bg-orange"
      profilePic="user-1"
      name="User 1"
    />
    <ProgressCard
      width="55"
      bgColor="bg-blue-100"
      profilePic="user-2"
      name="User 2"
    />
    <ProgressCard
      width="65"
      bgColor="bg-orange-50"
      profilePic="user-3"
      name="User 3"
    />
    <ProgressCard
      width="70"
      bgColor="bg-purple-100"
      profilePic="user-4"
      name="User 4"
    />
  </div>
);

export default Progress;
