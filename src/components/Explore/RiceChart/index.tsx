import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import NewReleaseItem from "../../Shared/NewReleaseItem";
import { data } from "../NewRelease/data";
import "./test.scss";
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
  const getIntroOfPage = (label: any) => {
    if (label === "Page A") {
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
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="w-auto  h-[400px] mt-10 rounded">
      <div className="img  w-auto  h-full relative rounded">
        <div className=" w-auto my-blur h-full rounded">
          <div className="px-5 py-4">
            <div className="flex  items-center mb-3 ">
              <h1 className="text-white text-3xl font-bold">#ricechart</h1>
            </div>
            <div className="flex mr-auto justify-between ">
              <div className="flex flex-col">
                {data.slice(0, 3).map((item, index) => (
                  <div className="flex items-center">
                    <span className="number text-4xl font-black">
                      {index + 1}
                    </span>
                    <NewReleaseItem index={index} item={item} className="" />
                  </div>
                ))}
              </div>
              <LineChart width={780} height={300} data={data2}>
                <Line type="monotone" dataKey="uv" stroke="#4A90E2" />
                <Line type="monotone" dataKey="pv" stroke="#27BD9C" />
                <Line type="monotone" dataKey="amt" stroke="#E35050" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 3" />
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
