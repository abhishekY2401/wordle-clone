import "./Keyboard.css";
import React from "react";
import Key from "./Key";

function Keyboard() {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line-1">
        {key1.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line-2">
        {key2.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line-3">
        <Key keyVal="ENTER" bigKey={true} />
        {key3.map((key) => {
          return <Key keyVal={key} />;
        })}
        <Key keyVal="DELETE" bigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
