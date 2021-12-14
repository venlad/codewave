import React, { useRef, useEffect, useState } from "react";
import styles from "../css/LineSplitter.module.css";

export default function LineSplitter2({ text }) {
  const [lines, setLines] = useState([]);
  const testRef = useRef(null);

  useEffect(() => {
    const testEl = testRef.current;
    let line = [];
    let output = [];

    text.split(" ").forEach((word) => {
      testEl.innerHTML = (testEl.innerHTML + " " + word).trim();

      if (testEl.scrollWidth > testEl.clientWidth) {
        testEl.innerHTML = word;
        output = output.concat(line.join(" "));
        line = [];
      }

      line = line.concat(word);
    });

    output = output.concat(line.join(" "));
    setLines(output);
  }, [text]);

  return (
    <>
      <div ref={testRef} className="Test" />
      <div className="Container">
        {lines.map((line, index) => (
          <div className="Line" key={index}>
            {line}
          </div>
        ))}
      </div>
    </>
  );
}
