import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesNormalBand,
  SparklinesSpots,
} from "react-sparklines";

const SparkLine = ({ data }) => {
  console.log(data);
  const chartData = data.map(
    (values) => values.name === "temperature" && values.value
  );
  console.log(chartData[0]);

  return (
    <div className="  w-full m-1">
      <Sparklines limit={20} width={180} height={35} data={chartData[0]}>
        <SparklinesLine color="blue" />
        <SparklinesLine style={{ fill: "blue" }} />
        <SparklinesSpots />
        <SparklinesNormalBand />
      </Sparklines>
    </div>
  );
};

export default SparkLine;
