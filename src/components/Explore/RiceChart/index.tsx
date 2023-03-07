import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
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
import WorldChart from "./WorldChart";
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
  const templateTooltip = (
    data: any,
    color: string,
    isCustomStyles: boolean = false
  ) => {
    const styles = {
      backgroundColor: color,
      transform: "translate(304.091px, 188px);",
      top: "0px",
      left: "0px",
      pointerEvents: "none",
      visibility: "visible",
      position: "absolute",
      transition: " -webkit-transform 400ms ease 0s;",
    } as React.CSSProperties;
    return (
      <div
        className="border-0 rounded min-w-[250px] w-full"
        style={isCustomStyles ? styles : { backgroundColor: color }}
      >
        <div className="p-2 flex text-white items-center">
          <img src={data.avatar} className="h-10 w-10 rounded mr-2" />
          <div className="text-xs">
            <p className="font-bold">{data.name}</p>
            <p className="text-gray-300">{data.author[0]}</p>
          </div>
          <div className="ml-auto text-xs font-bold">39%</div>
        </div>
      </div>
    );
  };

  const [color, setColor] = useState(colorArr[0]);
  const [dataHightlight, setDataHightlight] = useState(data[0]);
  const [lineHightlight, setLineHightlight] = useState([false, false, false]);
  const [rank1, setRank1] = useState(false);
  const [rank2, setRank2] = useState(false);
  const [rank3, setRank3] = useState(false);

  const handleHightLightLine = async (index: number) => {
    const toolTipWrapper = document.getElementsByClassName(
      "recharts-tooltip-wrapper"
    )[0];
    if (index == -1) {
      setLineHightlight([false, false, false]);
      setRank1(false);
      setRank2(false);
      setRank3(false);
      // @ts-ignore: Object is possibly 'null'.
      toolTipWrapper.style.visibility = "hidden";
      toolTipWrapper.classList.remove("recharts-tooltip-wrapper-right");
      toolTipWrapper.classList.remove("recharts-tooltip-wrapper-bottom");
      toolTipWrapper.innerHTML = "";
      return;
    }

    toolTipWrapper.classList.add("recharts-tooltip-wrapper-right");
    toolTipWrapper.classList.add("recharts-tooltip-wrapper-bottom");

    const arrLineHightlight = [...lineHightlight];
    arrLineHightlight[index] = true;
    const newData = data[index];
    const newColor = colorArr[index];
    setLineHightlight(arrLineHightlight);
    setDataHightlight(newData);
    setColor(newColor);

    toolTipWrapper.innerHTML += ReactDOMServer.renderToString(
      templateTooltip(newData, newColor, true)
    );
    // @ts-ignore: Object is possibly 'null'.
    toolTipWrapper.style.visibility = "visible";
  };
  const handleMouseLeaveLine = () => {
    setLineHightlight([false, false, false]);
    setRank1(false);
    setRank2(false);
    setRank3(false);
  };
  const handleMouseEnterLine = (index: number, data: any) => {
    setColor(colorArr[index]);
    setDataHightlight(data);
    if (index == 0) {
      setRank1(true);
      setRank2(false);
      setRank3(false);
    }
    if (index == 1) {
      setRank1(false);
      setRank2(true);
      setRank3(false);
    }
    if (index == 2) {
      setRank1(false);
      setRank2(false);
      setRank3(true);
    }
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

  const CustomTooltip = ({ active, payload, coordinate }: any) => {
    if (active && payload && payload.length) {
      return templateTooltip(dataHightlight, color);
    }

    return null;
  };

  return (
    <>
      {" "}
      <div className="w-auto  h-[430px] mt-10 rounded overflow-hidden mb-5">
        <div className="img  w-auto  h-full relative rounded ">
          <div className=" w-auto my-blur h-full rounded">
            <div className="px-5 py-4">
              <div className="flex  items-center mb-3 ">
                <h1 className="text-white text-2xl font-bold mb-2">
                  #ricechart
                </h1>
              </div>
              <div className="flex mr-auto justify-between ">
                <div className="flex flex-col items-center">
                  {data.slice(0, 3).map((item, index) => (
                    <ItemChart
                      item={item}
                      index={index}
                      handleHightLightLine={handleHightLightLine}
                      rank={
                        index == 0
                          ? rank1
                          : index == 1
                          ? rank2
                          : index == 2
                          ? rank3
                          : null
                      }
                    />
                  ))}
                  <Button
                    text="Xem thêm"
                    className="text-sm rounded-full border border-1 border-white px-5 py-1.5 w-max hover:bg-[hsla(0,0%,100%,.1)]"
                  />
                </div>
                <LineChart width={700} height={300} data={data2}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#4A90E2"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(0, data[0]);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[0]}
                    onMouseEnter={() => handleMouseEnterLine(0, data[0])}
                  />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#27BD9C"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(1, data[1]);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[1]}
                    onMouseEnter={() => handleMouseEnterLine(1, data[1])}
                  />

                  <Line
                    type="monotone"
                    dataKey="amt"
                    stroke="#E35050"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(2, data[2]);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[2]}
                    onMouseEnter={() => handleMouseEnterLine(2, data[2])}
                  />
                  <CartesianGrid stroke="#ccc" strokeDasharray="2 4" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    content={<CustomTooltip />}
                    active={true}
                    cursor={false}
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorldChart />
    </>
  );
};

export default RiceChart;
