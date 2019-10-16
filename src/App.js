import React from "react";
import "./App.css";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
};

function App() {
  return (
    <div>
      <Particles params={particleOpt} />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          // marginTop: "-50px",
          // marginLeft: "auto",
          // marginRight: "auto",
          // margin: "auto",
          // display: "inline-block",
          // textAlign: "center",
          transform: "translate(-50%, -50%)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#dddddd",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 60
          }}
        >
          Welcome Buddy!!
        </h1>
      </div>
    </div>
  );
}

export default App;
