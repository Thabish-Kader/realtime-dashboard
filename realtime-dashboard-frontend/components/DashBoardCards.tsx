import React from "react";

type DashBoardCardsProps = {
  data: ServerData[];
  percentageChange: Change | null;
};

export const DashBoardCards = ({
  data,
  percentageChange,
}: DashBoardCardsProps) => {
  const totalRevenue = data?.reduce((acc, curr) => acc + curr.total_revenue, 0);
  const totalProfits = data?.reduce((acc, curr) => acc + curr.profit, 0);
  const totalLoss = data?.reduce((acc, curr) => acc + curr.loss, 0);

  return (
    <div className="flex flex-col items-center space-y-5 w-full ">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="rounded-xl bg-[#191e24] p-4 text-yellow-500 w-full flex items-center justify-center">
          <div>
            <p className="text-center">Total Revenue</p>
            <p className="text-center">{totalRevenue}</p>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="rounded-xl bg-[#191e24] p-4 text-green-500 w-full">
            <p className="text-center">Total Profits</p>
            <p className="text-center">{totalProfits}</p>
          </div>
          <div className="rounded-xl bg-[#191e24] p-4 text-red-500 w-full">
            <p className="text-center">Total Loss</p>
            <p className="text-center">{totalLoss}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#191e24] p-4 w-full">
        {percentageChange?.changeTotalRevenue! > 0 ? (
          <p className="text-center text-green-500">
            Total Revenue Increased by &nbsp;
            {percentageChange?.changeTotalRevenue.toFixed(2)}%
          </p>
        ) : (
          <p className="text-center text-red-600">
            Total Revenue Decreased by &nbsp;
            {percentageChange?.changeTotalRevenue.toFixed(2)}%
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="grid gap-2">
          <div
            className={`rounded-xl bg-[#191e24] p-4 ${
              percentageChange?.changeProfit! > 0
                ? "text-green-500"
                : "text-red-500"
            }  w-full`}
          >
            <p className="text-center">Profits Change</p>
            <p className="text-center">
              {percentageChange?.changeProfit! > 0 ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )}

              {percentageChange?.changeProfit.toFixed(2)}
            </p>
          </div>
          <div
            className={`rounded-xl bg-[#191e24] p-4 ${
              percentageChange?.changeLoss! < 0
                ? "text-green-500"
                : "text-red-500"
            }   w-full`}
          >
            <p className="text-center">Total Loss Change</p>
            <p className="text-center">
              {percentageChange?.changeLoss.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-[#191e24] p-4 text-yellow-500 w-full flex items-center justify-center">
          <div>
            <p className="text-center">Total Revenue Change</p>
            <p className="text-center">
              {percentageChange?.changeTotalRevenue! > 0 ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )}
              {percentageChange?.changeTotalRevenue.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
