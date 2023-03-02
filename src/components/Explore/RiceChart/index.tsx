import React, { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Button from "../../../shared/small_components/Button/Basic";
import NewReleaseItem from "../../Shared/NewReleaseItem";
import { data } from "../NewRelease/data";
import ItemChart from "./item";
import "./styles.scss";
const RiceChart = () => {
  const data2 = [
    {
      name: "19:00",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "21:00",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "23:00",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "01:00",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "03:00",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "05:00",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "07:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "09:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "13:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "15:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "17:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const colorArr = ["#4A90E2", "#27BD9C", "#E35050"];
  const [color, setColor] = useState(colorArr[0]);
  const [dataHightlight, setDataHightlight] = useState(data[0]);
  const handleMouseEnterLine = (index: number, data: any) => {
    setColor(colorArr[index]);
    setDataHightlight(data);
  };
  const getIntroOfPage = (label: any) => {
    if (label === "09:00") {
      return "Page A is about men's clothing";
    }
    if (label === "Page B") {
      return "Page B is about women's dress";
    }
    if (label === "Page C") {
      return "Page C is about women's bag";
    }
    if (label === "Page D") {
      return "Page D is about household goods";
    }
    if (label === "Page E") {
      return "Page E is about food";
    }
    if (label === "Page F") {
      return "Page F is about baby food";
    }
    return "";
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={` border-0 rounded min-w-[250px] w-full`}
          style={{ backgroundColor: color }}
        >
          <div className="p-2 flex text-white items-center">
            <img
              src={dataHightlight.avatar}
              className={"h-10 w-10 rounded mr-2"}
            />
            <div className="text-xs ">
              <p className="font-bold ">{dataHightlight.name}</p>
              <p className="text-gray-300">{dataHightlight.author[0]}</p>
            </div>
            <div className="ml-auto text-xs font-bold">39%</div>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="w-auto  h-[430px] mt-10 rounded">
      <div className="img  w-auto  h-full relative rounded">
        <div className=" w-auto my-blur h-full rounded">
          <div className="px-5 py-4">
            <div className="flex  items-center mb-3 ">
              <h1 className="text-white text-2xl font-bold mb-2">#ricechart</h1>
            </div>
            <div className="flex mr-auto justify-between ">
              <div className="flex flex-col items-center">
                {data.slice(0, 3).map((item, index) => (
                  <ItemChart item={item} index={index} />
                ))}
                <Button
                  text="Xem thêm"
                  className="text-sm rounded-full border border-1 border-white px-5 py-1.5 w-max hover:bg-[hsla(0,0%,100%,.1)]"
                />
              </div>
              <LineChart width={700} height={300} data={data2}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#27BD9C"
                  dot={false}
                  onMouseEnter={() => handleMouseEnterLine(1, data[1])}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#4A90E2"
                  dot={false}
                  onMouseEnter={() => handleMouseEnterLine(0, data[0])}
                />
                <Line
                  type="monotone"
                  dataKey="amt"
                  stroke="#E35050"
                  dot={false}
                  onMouseEnter={() => handleMouseEnterLine(2, data[2])}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="2 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiceChart;
