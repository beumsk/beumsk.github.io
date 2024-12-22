import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartBars({ data }: { data: any }) {
  return (
    <ResponsiveContainer minWidth={280} height="80%" minHeight={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="commits" fill="#4db6ac" />
      </BarChart>
    </ResponsiveContainer>
  );
}
