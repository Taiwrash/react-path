import React from "react";
import PageLoader from "./PageLoader";

const MemeInterface = (props) => {
  return (
    <main>
      <div className="form-area">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text Here"
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text Here"
            onChange={props.handleChange}
          />
          <button>Gen. Meme</button>
        </form>
      </div>
      <div className="meme-area">
        {props.loading ? <PageLoader /> : <img src={props.img} alt="Meme" />}

        <p className="top">{props.topText}</p>
        <p className="bottom">{props.bottomText}</p>
      </div>
      <a href={props.img} target="_blank">
        Meme Link Here
      </a>
    </main>
  );
};
export default MemeInterface;
