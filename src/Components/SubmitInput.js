import React, { useState } from "react";

const SubmitInput = ({ onSendInput }) => {
  const clearData = {
    myImageUrl: "",
    myColorOverlay: "#111111",
    myText: "",
  };

  const [formInput, setFormInput] = useState(clearData);

  const submitFormData = () => {
    const imageInfo = {
      myImageUrl: formInput.myImageUrl,
      myColorOverlay: formInput.myColorOverlay.slice(1),
      myText: formInput.myText,
    };
    onSendInput(imageInfo);
    setFormInput(clearData);
  };

  return (
    <div className="form">
      <form className="formInput">
        <label>Enter Your Image URL</label>
        <br></br>
        <input
          type="text"
          placeholder="Image URL"
          name="myImageUrl"
          value={formInput.myImageUrl}
          onChange={(event) => {
            setFormInput({ ...formInput, myImageUrl: event.target.value });
          }}
        />
      </form>
      <form className="formInput">
        <label>Select Your Overlay Color</label>
        <br></br>
        <input
          type="color"
          name="myColorOverlay"
          value={formInput.myColorOverlay}
          onChange={(event) => {
            setFormInput({ ...formInput, myColorOverlay: event.target.value });
          }}
        />
      </form>
      <form className="formInput">
        <label>Enter Your Personalized Text</label>
        <br></br>
        <input
          type="text"
          placeholder="Personalized Text"
          name="myText"
          value={formInput.myText}
          onChange={(event) => {
            setFormInput({ ...formInput, myText: event.target.value });
          }}
        />
      </form>
      <br></br>
      <button type="submit" onClick={submitFormData}>
        Submit
      </button>
    </div>
  );
};

export default SubmitInput;
