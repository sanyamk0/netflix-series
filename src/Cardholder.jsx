import React from "react";
import Card from "./Card";
import Sdata from "./Sdata.jsx";
import "./Cardholder.css";

function Cardholder() {
  return (
    <>
      <div className="Container">
        {Sdata.map((val) => {
          return (
            <Card
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              links={val.links}
            />
          );
        })}
      </div>
    </>
  );
}
export default Cardholder;
