import React, { useState } from "react";
import AnimatedNumber from "react-animated-number";
import CountUp from "react-countup";

const Progress = ({ done, color, bgColor }) => {
  const [style, setStyle] = useState();
  setTimeout(() => {
    const newStyle = {
      opacity: "1",
      width: `${done}%`,
      background: color,
    };
    setStyle(newStyle);
  }, 100);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="progress1" style={{ background: bgColor }}>
          <div className="progress-done1" style={style}></div>
        </div>

        <p
          style={{
            color: color,
            fontWeight: "500",
            marginBottom: "0",
            marginTop: "10px",
          }}
        >
          <CountUp end={done} duration={1.3} />
        </p>
      </div>
    </>
  );
};

export default Progress;
