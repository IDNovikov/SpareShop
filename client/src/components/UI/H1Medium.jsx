import React from "react";

const H1Medium = ({ text, align }) => {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');
        `}
      </style>

      <div
        style={{
          fontFamily: "IBM Plex Sans",
          fontSize: " 32px",
          fontWeight: "500",
          lineHeight: "28px",
          textAlign: align,
          color: "#2D2D2D",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default H1Medium;
