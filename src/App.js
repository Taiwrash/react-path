import React from "react";
import Header from "./memeComponents/Header";
import "./index.css";
import MemeGenerator from "./memeComponents/memeGenerator";
const App = () => {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
};
export default App;
