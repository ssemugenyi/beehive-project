import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/Wi";

const Gauge = ({ title, value, header }) => {
  return (
    <div className=" bg-[#656565] flex flex-col justify-center items-center w-[150px] rounded-[25px] mt-1 p-5 text-white">
      <div className=" flex-1 flex justify-between items-center m-[10px]">
        <span className=" block mr-[18px] text-white font-bold text-[15px] capitalize">
          {title}
        </span>
        <span className="block text-white text-[25px]">
          {title === "temperature" ? <FaTemperatureLow /> : <WiHumidity />}
        </span>
      </div>
      <div className=" w-[120px] h-[120px]">
        <CircularProgressbarWithChildren
          value={value}
          styles={{
            text: {
              fill: "#ff6285",

              fontSize: "8px",
              textAlign: "center",
            },
            path: {
              stroke: `rgba(255, 255, 255, 1 )`,

              transition: "stroke-dashoffset 0.5s ease 0s",
            },
          }}
        >
          <div
            style={{
              fontSize: 12,
              marginTop: -5,
              textTransform: "uppercase",
            }}
          >
            {title === "temperature" && value >= 36
              ? "high"
              : "low" && title === "humidity" && value >= 50
              ? "moderate"
              : "low"}{" "}
            <br />
            <strong className=" text-[25px]">{`${
              title === "temperature" ? value + "\u00b0" : value + "%"
            } `}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Gauge;
