import React, { useState } from "react";

const SearchForm = ({ submitSearch }) => {
  const [myImageUrl, setMyImageUrl] = useState("");
  const [myColorOverlay, setMyColorOverlay] = useState("");
  const [myText, setMyText] = useState("");
  const [myTextAlign, setMyTextAlign] = useState("");

  const inputHandleImage = (event) => {
    event.preventDefault();
    setMyImageUrl(event.target.value);
  }
  const inputHandleColor = (event) => {
    event.preventDefault();
    setMyColorOverlay(event.target.value);
  }
  const inputHandleText = (event) => {
    event.preventDefault();
    setMyText(event.target.value);
  }

    // setTextMyAlign(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    // if (!query || query === "") return;
    // submitSearch(query);
    // setCity(query);
    // setQuery("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="search"
          placeholder="Enter Image URL"
          required
          value={myImageUrl}
          onChange={inputHandleImage}
        />
      </form>
      <form onSubmit={submitHandler}>
        <input
          type="color"
          className="search"
          name="choosecolor"
          required
          value={myColorOverlay}
          onChange={inputHandleColor}
        />
      </form>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="search"
          placeholder="Enter Personalized Image Text"
          required
          value={myText}
          onChange={inputHandleText}
        />
      </form>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default SearchForm;
