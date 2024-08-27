import React, { useRef } from "react";
import YellowButton from "./yellowButton/yellowButton";
import inst1 from "../../assets/inst1.png";
import inst2 from "../../assets/inst2.png";
import inst3 from "../../assets/inst3.png";
import inst4 from "../../assets/inst4.png";
import inst5 from "../../assets/inst5.png";
import inst6 from "../../assets/inst6.png";
import inst7 from "../../assets/inst7.png";
import inst8 from "../../assets/inst8.png";
import inst9 from "../../assets/inst9.png";
import inst10 from "../../assets/inst10.png";
import inst11 from "../../assets/inst11.png";
import inst12 from "../../assets/inst12.png";

const InstComp = (props) => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "auto",
        padding: "32px 108px",
        gap: "24px",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          fontFamily: "IBM Plex Sans",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "28px",
          textAlign: "center",
          color: "white",
        }}
      >
        <p>Follow our instagram </p>
        @spearshoplimassol
      </div>
      <a
        style={{ textDecoration: "none" }}
        href="https://www.instagram.com/spearshoplimassol"
      >
        <YellowButton
          height={"52px"}
          width={"250px"}
          text={"Follow us"}
          fontSize={"20px"}
          fontColor={"Black"}
        />
      </a>

      <div
        style={{
          width: "100vw",
          padding: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "10px",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {windowWidth.current > 861 ? (
          <>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst1} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst2} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst3} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst4} />
            </div>
            <div>
              <img style={{ width: "200px", height: "200px" }} src={inst5} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst6} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst7} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst8} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst9} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst10} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst11} />
            </div>
            <div style={{ width: "200px", height: "200px" }}>
              <img style={{ width: "200px", height: "200px" }} src={inst12} />
            </div>
          </>
        ) : (
          <>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst7} />
            </div>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst8} />
            </div>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst9} />
            </div>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst10} />
            </div>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst11} />
            </div>
            <div style={{ width: "190px", height: "190px" }}>
              <img style={{ width: "190px", height: "190px" }} src={inst12} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InstComp;
