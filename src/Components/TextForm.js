import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertToTextForm("success", "Converted to uppercase");
  };
  const handleLowClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertToTextForm("success", "Converted to lowercase");
  };
  const handleInvertClick = (e) => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.alertToTextForm("success", "Inverted");
  };
  const handleClearClick = (e) => {
    setText("");
    props.alertToTextForm("success", "Cleared");
  };
  return (
    <div className="container my-2">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor:
              props.displayMode === "light"
                ? "var(--bs-gray-100)"
                : "var(--bs-gray-dark)",
            color:
              props.displayMode === "light"
                ? "var(--bs-gray-dark)"
                : "var(--bs-gray-100)",
          }}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleInvertClick}>
          Invert
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word.</p>
        <p> {text.length} characters</p>
        <p>{Math.round(0.008 * text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter here",
};
