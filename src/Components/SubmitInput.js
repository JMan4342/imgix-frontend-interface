import React, { useState } from "react";

const SubmitInput = ({ sendInput }) => {
  const clearData = {
    myImageUrl: "",
    myColorOverlay: "#111111",
    myText: "",
    // myTextAlign: "",
  };

  const [formInput, setFormInput] = useState(clearData);

  const submitFormData = () => {
    const imageInfo = {
      myImageUrl: formInput.myImageUrl,
      myColorOverlay: formInput.myColorOverlay,
      myText: formInput.myText,
      // myTextAlign: formInput.myTextAlign,
    };
    console.log({imageInfo})
    const sendInput = `${imageInfo.myImageUrl} + ${imageInfo.myColorOverlay} + ${imageInfo.myText}`;
    console.log({sendInput})
    setFormInput(clearData);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="search"
          placeholder="Enter Image URL"
          name="myImageUrl"
          value={formInput.myImageUrl}
          onChange={(event) => {
            setFormInput({ ...formInput, myImageUrl: event.target.value });
          }}
        />
      </form>
      <form>
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
        <input
          type="text"
          className="search"
          placeholder="Enter Personalized Image Text"
          name="myText"
          value={formInput.myText}
          onChange={(event) => {
            setFormInput({ ...formInput, myText: event.target.value });
          }}
        />
      </form>
      <button type="submit" onClick={submitFormData}>
        Submit
      </button>
    </div>
  );
};

export default SubmitInput;
