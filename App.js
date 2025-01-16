import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Karan Kumar! Kaise ho"
);

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);
