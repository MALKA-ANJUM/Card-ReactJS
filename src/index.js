import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import Data from "./Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="heading">Happy Moments</h1>
    {/* functional programming --> passing a function inside of a function and so on */}
    {Data.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          name={val.name}
          link={val.link}
        ></Card>
      );
    })}
  </>
);
