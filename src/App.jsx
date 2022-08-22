import { useState } from "react";

import "./App.css";

import Gauge from "./components/Gauge";
import Sensor from "./components/Sensor";
import SparkLine from "./components/SparkLine";
import { sensor_data } from "./components/data";
// import { data } from "autoprefixer";

function App() {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-gray-400   w-full p-10 flex justify-center items-center gap-2">
      <div className="flex flex-wrap justify-center items-center rounded-[30px] overflow-hidden bg-[#cbcbcb] shadow-2xl w-[1200px] mb-[25px] mx-0 my-auto ">
        <div className="p-5 rounded-md bg-slate-300 shadow-md lg:mt-2 mb-2">
          <h1 className="lg:text-xl text-md md:text-sm font-bold">
            REAL-TIME BEEHIVE TEMPERATURE AND HUMIDITY MONITORING AND CONTROL
            SYSTEM
          </h1>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 p-2 ">
            {sensor_data.map((data) =>
              data.parameter.map((values) => (
                <Gauge
                  key={values.name}
                  title={values.name}
                  value={values.value[5]}
                  header={data.sensor}
                />
              ))
            )}
          </div>

          <div className="p-5">
            <div className="">
              {sensor_data.map((sensor) => (
                <>
                  <h1 className="text-[#656565] font-bold uppercase p-0.2">{`${sensor.sensor
                    .replace(/_/g, " ")
                    .replace("1", "one")
                    .replace("2", "two")} temperature `}</h1>
                  <SparkLine key={sensor.id} data={sensor.parameter} />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="p-5">
            {sensor_data.map((sensor) => (
              <Sensor
                key={sensor.id}
                name={sensor.sensor}
                parameters={sensor.parameter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
