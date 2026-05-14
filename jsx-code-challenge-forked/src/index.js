//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Welcome to my mini-shop</h1>
    <p>
      Here are the products available in my shop;
      <ul>
        <li>Kente</li>
        <li>Batakari</li>
        <li>Khaki</li>
      </ul>
    </p>
  </div>,
  document.querySelector("#root")
);
