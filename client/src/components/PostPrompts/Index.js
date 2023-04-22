import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactDOM from "react-dom";
const CardChanger = () => {
  function chooseSelectBird() {
    const node = document.getElementById("selectBird");
    const a = ReactDOM.findDOMNode(node);
    console.log(a);
    const parentContainer = a.parentElement;
    parentContainer.setAttribute("class", "visually-hidden");
    const birdSizeNode = document.getElementById("birdSizeNode");
    const b = ReactDOM.findDOMNode(birdSizeNode);
    b.setAttribute("class", "birdsBySize");
  }
  function chooseIdTool() {
    const node = document.getElementById("idTool");
    const a = ReactDOM.findDOMNode(node);
    console.log(a);
    window.location.replace("/identify");
  }

  return (
    <>
      <div className="btnBox">
        <div id="selectBird">
          <Button onClick={chooseSelectBird}>
            Select from <span style={{ fontWeight: "bold" }}>Birds</span>
          </Button>
        </div>
        <br></br>
        <div id="idTool">
          <Button onClick={chooseIdTool}>
            Use the <span style={{ fontWeight: "bold" }}>ID</span> tool
          </Button>
        </div>
        <br></br>
      </div>
      <div className="birdsBySize visually-hidden" id="birdSizeNode">
        <Form.Group>
          <Form.Select aria-label="Default Option" className="birdchoice">
            <option>Select from large birds</option>
            <option value="Great Blue Heron">Great Blue Heron</option>
            <option value="Bald Eagle">Bald Eagle</option>
            <option value="Osprey">Osprey</option>
            <option value="Common Raven">Common Raven</option>
            <option value="Turkey Vulture">Turkey Vulture</option>
            <option value="Great Horned Owl">Great Horned Owl</option>
          </Form.Select>
          <Form.Select aria-label="Default Option" className="birdchoice">
            <option>Select from medium birds</option>
            <option value="Mourning Dove">Mourning Dove</option>
            <option value="Belted Kingfisher">Belted Kingfisher</option>
            <option value="Common Grackle">Common Grackle</option>
            <option value="American Avocet">American Avocet</option>
            <option value="Black Billed Magpie">Black Billed Magpie</option>
          </Form.Select>
          <Form.Select aria-label="Default Option" className="birdchoice">
            <option>Select from small birds</option>
            <option value="Barn Swallow">Barn Swallow</option>
            <option value="Brownheaded Cowbird">Brownheaded Cowbird</option>
            <option value="Lazuli Bunting">Lazuli Bunting</option>
            <option value="Mountain Bluebird">Mountain Bluebird</option>
            <option value="Tree Swallow">Tree Swallow</option>
            <option value="Yellow Warbler">Yellow Warbler</option>
            <option value="Red-Headed Woodpecker">Red-Headed Woodpecker</option>
            <option value="Black Headed Grosbeck">Black Headed Grosbeak</option>
            <option value="Pygmy Nuthatch">Pygmy Nuthatch</option>
          </Form.Select>
        </Form.Group>
      </div>
    </>
  );
};

export default CardChanger;
