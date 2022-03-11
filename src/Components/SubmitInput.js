import React, { useState } from "react";

const SubmitInput = ({ onSendInput }) => {
  const clearData = {
    myImageUrl: "",
    myColorOverlay: "#111111",
    myText: "",
    // myTextAlign: "",
  };

  const [formInput, setFormInput] = useState(clearData);
  // const [myImage, setMyImage] = useState("");

  const submitFormData = () => {
    const imageInfo = {
      myImageUrl: formInput.myImageUrl,
      myColorOverlay: formInput.myColorOverlay.slice(1),
      myText: formInput.myText,
      // myTextAlign: formInput.myTextAlign,
    };
    console.log({ imageInfo });
    onSendInput(imageInfo);
    // setMyImage(imageInfo) = `${imageInfo.myImageUrl}?txt=${imageInfo.myText}&blend=${imageInfo.myColorOverlay}`;
    // console.log({ myImage });
    setFormInput(clearData);
  };

  return (
    <div className="form">
      <form>
        <label>Enter Your Image URL</label>
        <br></br>
        <input
          type="text"
          className="search"
          placeholder="Image URL"
          name="myImageUrl"
          value={formInput.myImageUrl}
          onChange={(event) => {
            setFormInput({ ...formInput, myImageUrl: event.target.value });
          }}
        />
      </form>
      <form>
        <label>Select Your Overlay Color</label>
        <br></br>
        <input
          type="color"
          className="search"
          name="myColorOverlay"
          value={formInput.myColorOverlay}
          onChange={(event) => {
            setFormInput({ ...formInput, myColorOverlay: event.target.value });
          }}
        />
      </form>
      <form>
        <label>Enter Your Personalized Text</label>
        <br></br>
        <input
          type="text"
          className="search"
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
