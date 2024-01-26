export const getRandomRevenueData = () => {
  const random_data = [
    {
      name: "BHR",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "RAD",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "FDS",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "AVF",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "RTY",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "VFV",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 10000),
    },
    {
      name: "GFL",
      total_revenue: Math.floor(Math.random() * 10000),
      loss: Math.floor(Math.random() * 1000),
    },
  ];

  return new Promise((resolve, reject) => {
    const revenueData = random_data?.map((item) => {
      const profit = item?.total_revenue - item?.loss;
      return { ...item, profit };
    });
    if (random_data) {
      resolve(revenueData);
    } else {
      reject(new Error("Profit cannot be negative."));
    }
  });
};
