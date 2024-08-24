import React from "react";

const TittleText = (props) => {
  return (
    <div
      style={{
        margin: props.margin,
        width: props.width,
        height: props.height,
        gap: "8px",
        opacity: "0px",
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: "90.61px",
        fontFamily: "Covered By Your Grace",
        textAlign: "center",
        color: "white",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');
      </style>
      Spearfishing <p>Store</p>
    </div>
  );
};

export default TittleText;
