import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

export const LineBarAreaComposedChart = ({ data }: { data: ServerData[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="user" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="sys" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="sys" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="user" stroke="#ff7300" />
        <Scatter dataKey="idle" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
