import React from "react";
import spin from "../spin.svg";

const PageLoader = () => {
  return (
    <main>
      <img src={spin} alt="loader" />
    </main>
  );
};

export default PageLoader;
