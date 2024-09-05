import React from "react";

const H2Medium = ({ text, align }) => {
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
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "24px",
          textAlign: align,
          color: "#636363",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default H2Medium;
