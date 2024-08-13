import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Counter from "remote/Counter";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: main-micro</div>
    <Counter mul={3} />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
