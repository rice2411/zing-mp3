import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getFile } from "../../../constant/file";
import ChartService from "../../../service/chart";
import Button from "../../../shared/small_components/Button/Basic";
import NewReleaseItem from "../../Shared/NewReleaseItem";

import ItemChart from "./item";
import "./styles.scss";
import WorldChart from "./WorldChart";
const RiceChart = () => {
  const colorArr = ["#4A90E2", "#27BD9C", "#E35050"];
  const templateTooltip = (
    data: any,
    color: string,
    isCustomStyles: boolean = false
  ) => {
    const styles = {
      backgroundColor: color,
      transform: "",
      top: "0",
      left: "0",
      right: "0",
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
          <img src={getFile(data?.image)} className="h-10 w-10 rounded mr-2" />
          <div className="text-xs">
            <p className="font-bold">{data?.name}</p>
            <p className="text-gray-300">{data?.artist?.name}</p>
          </div>
          <div className="ml-auto text-xs font-bold">39%</div>
        </div>
      </div>
    );
  };

  const [color, setColor] = useState(colorArr[0]);
  const [data, setData]: any = useState([]);
  const [dataLine, setDataLine] = useState([]);
  const [dataHightlight, setDataHightlight] = useState({});
  const [lineHightlight, setLineHightlight] = useState([false, false, false]);
  const [rank1, setRank1] = useState(false);
  const [rank2, setRank2] = useState(false);
  const [rank3, setRank3] = useState(false);

  const fetchData = async () => {
    try {
      const resposne: any = await ChartService.get();
      const dataRaw = resposne?.data?.data.data;
      if (dataRaw) {
        setData(dataRaw);
        setDataHightlight(dataRaw[0].info);
        const times = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

        const result: any = await Promise.all(
          times.map((value: number, index: number) => {
            const template = {
              name: `${value}:00`,
              st: dataRaw[0].viewsData[index],
              nd: dataRaw[1].viewsData[index],
              rd: dataRaw[2].viewsData[index],
            };
            return template;
          })
        );

        setDataLine(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
    const newData = data[index].info;
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

  const CustomTooltip = ({ active, payload, coordinate }: any) => {
    if (active && payload && payload.length) {
      return templateTooltip(dataHightlight, color);
    }

    return null;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <div className="  h-[430px] mt-10 rounded overflow-hidden mb-5">
        <div className="img  w-auto  h-full relative rounded ">
          <div className=" w-auto my-blur h-full rounded">
            <div className="px-5 py-4">
              <div className="flex  items-center mb-3 ">
                <h1 className="text-white text-2xl font-bold mb-2">
                  #ricechart
                </h1>
              </div>
              <div className="flex mr-auto ">
                <div className="flex flex-col items-center">
                  {data?.slice(0, 3).map((item: any, index: any) => (
                    <ItemChart
                      key={index}
                      item={item?.info}
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
                    className="text-sm rounded-full border border-1 border-white !text-white px-5 py-1.5 w-max hover:bg-[hsla(0,0%,100%,.1)]"
                  />
                </div>
                <LineChart width={790} height={300} data={dataLine}>
                  <Line
                    type="monotone"
                    dataKey="st"
                    stroke="#4A90E2"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(0, data[0].info);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[0]}
                    onMouseEnter={() => handleMouseEnterLine(0, data[0].info)}
                  />
                  <Line
                    type="monotone"
                    dataKey="nd"
                    stroke="#27BD9C"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(1, data[1].info);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[1]}
                    onMouseEnter={() => handleMouseEnterLine(1, data[1].info)}
                  />

                  <Line
                    type="monotone"
                    dataKey="rd"
                    stroke="#E35050"
                    strokeWidth={2}
                    activeDot={{
                      onMouseEnter(props, event) {
                        handleMouseEnterLine(2, data[2].info);
                      },
                      onMouseLeave() {
                        handleMouseLeaveLine();
                      },
                      strokeWidth: 3,
                    }}
                    dot={lineHightlight[2]}
                    onMouseEnter={() => handleMouseEnterLine(2, data[2].info)}
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
