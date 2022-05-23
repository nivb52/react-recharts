window.log = console.log;
import data from "../data.js";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {
  console.log("rendered");
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area dataKey={"value"} stroke="#2451B7" fill="url(#colorUv)" />
        <XAxis
          dataKey={"date"}
          axisLine={false}
          tickLine={false}
          tickFormatter={(date) => {
            return new Date(date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        <YAxis
          dataKey={"value"}
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(num) => "$" + num.toFixed(2)}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}


function CustomTooltip(props) {
  const { active } = props;
  if (active) {
    const { payload, label } = props;
    return (
      <div className="tooltip">
        <p>{`${new Date(label).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          "weekday": "short",
        })}`}</p>
        <p className="label">{`$${payload[0].value.toFixed(4)} USD`}</p>
      </div>
    );
  }

  return null;
}
export default App;
