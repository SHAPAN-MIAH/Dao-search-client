import React from "react";
import "./ResultContent.css";

const ResultContent = (props) => {
  // console.log(props)

  return (
    <div className="container text-start">
      <div className="result-content mt-4">
        <a href={props.result.link}>{props.result.title}</a>
        <a href={props.result.displayLink}>{props.result.displayLink}</a>
        <br />
        <a href={props.result.link}>
          <h5>{props.result.formattedUrl}</h5>
        </a>

        <p href="">{props.result.snippet}</p>
      </div>
    </div>
  );
};

export default ResultContent;
