import React from "react";
import ProgressBar from "./ProgressBar";
import Switch from "./SwitchInput";

const Sensor = ({ name, parameters }) => {
  return (
    <div className="bg-[#3968cb] rounded-[15px] p-5 text-white w-[400px] mb-8 text-[] bg-[#ca8a04]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[20px] font-bold capitalize">
          {name.replace(/_/g, " ").replace("1", "one").replace("2", "two")}
        </h2>
        {name === "sensor_1" && <Switch />}
      </div>

      {parameters.map((param) => (
        <div className="flex-1 justify-center items-start">
          <span
            className={`block text-left font-semibold text-dimWhite capitalize ${
              Object.keys(param).length - 1 ? "pt-5" : ""
            }`}
          >
            {param.name}
          </span>
          <ProgressBar data={param.value[5]} />
        </div>
      ))}
    </div>
  );
};

export default Sensor;
