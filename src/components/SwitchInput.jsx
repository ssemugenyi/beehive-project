import React, { useState } from "react";
import Switch from "react-input-switch";

const SwitchInput = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Switch
        value={value}
        onChange={setValue}
        styles={{
          track: {
            backgroundColor: "#c5c5c5",
          },
          trackChecked: {
            backgroundColor: "#ffffff",
          },
          button: {
            backgroundColor: "#ffffff",
          },
          buttonChecked: {
            backgroundColor: "#16dc25",
          },
        }}
      />
    </div>
  );
};

export default SwitchInput;
