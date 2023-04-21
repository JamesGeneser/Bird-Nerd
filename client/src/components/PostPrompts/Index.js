import React, { useRef } from "react";
import Button from "react-bootstrap/Button";

import ReactDOM from "react-dom";
const CardChanger = () => {
  function chooseSelectBird() {
    const node = document.getElementById("selectBird");
    const a = ReactDOM.findDOMNode(node);
    console.log(a);
  }
  function chooseIdTool() {
    const node = document.getElementById("idTool");
    const a = ReactDOM.findDOMNode(node);
    console.log(a);
    window.location.replace("/identify");
  }

  return (
    <div>
      <div id="selectBird">
        <Button onClick={chooseSelectBird}>
          Select from <span style={{ fontWeight: "bold" }}>Birds</span>
        </Button>
      </div>
      <div id="idTool">
        <Button onClick={chooseIdTool}>
          Use the <span style={{ fontWeight: "bold" }}>ID</span> tool
        </Button>
      </div>
    </div>
  );
};

export default CardChanger;
