import React from "react";

const GaugeParent = () => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`Humidity : ${percentage}%`}
        counterClockwise={false}
        styles={{
          // Customize the text
          text: {
            // Text color
            fill: "#f88",
            // Text size
            fontSize: "8px",
            textAlign: "center",
          },
          path: {
            // Path color
            stroke: `rgba(62, 152, 199, ${percentage / 100})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.75turn)",
            transformOrigin: "center center",
          },
        }}
      />
    </div>
  );
};

export default GaugeParent;
