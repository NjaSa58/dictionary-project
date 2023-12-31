import React from "react";
import "./Phonetic";

export default function Phonetic(props) {
  console.log(props.phonetic.text);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
