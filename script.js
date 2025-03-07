import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},"Namaste React",
    [
        React.createElement("div",{},"Harsha"),
        React.createElement("div",{},"Harsha")
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);