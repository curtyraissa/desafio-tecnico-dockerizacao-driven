import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Graphic = ({ data }) => {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 10,
        left: -30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" /> {/* riscos do fundo r*/}
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip /> {/* linha do cursor */}
      <Legend />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8" // cor da linha
        activeDot={{ r: 8 }} // tamanho da bolinha selecionada
      />
    </LineChart>
  );
};
