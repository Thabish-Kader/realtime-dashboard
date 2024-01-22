import React from "react";

export const DashBoardCards = () => {
  return (
    <div className="flex flex-col items-center space-y-5 w-full ">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full flex items-center justify-center">
          <div>
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full">
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
          <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full">
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full">
        <p className="text-center">CPU Usage</p>
        <p className="text-center">95%</p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="grid gap-2">
          <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full">
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
          <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full">
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
        </div>
        <div className="rounded-xl bg-[#191e24] p-4 text-gray-500 w-full flex items-center justify-center">
          <div>
            <p className="text-center">CPU Usage</p>
            <p className="text-center">95%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
