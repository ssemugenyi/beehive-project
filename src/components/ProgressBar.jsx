import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const ProgressBar = ({ data }) => {
  return (
    <div>
      {" "}
      <Progress
        percent={data}
        className={"w-full"}
        theme={{
          error: {
            symbol: " ",
            color: "green",
          },
        }}
        status="error"
      />
      <div className="flex justify-between items-center mr-5">
        <span className="font-semibold text-dimWhite text-[12px] capitalize">
          min
        </span>
        <span className="font-semibold text-dimWhite text-[12px] capitalize">
          max
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
