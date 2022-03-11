import React, { useState } from "react";
import SubmitInput from "./Components/SubmitInput";
import "./App.css";

function App() {
  const [myImageUrl, setMyImageUrl] = useState("Your Image Preview");

  // myImage = `${imageInfo.myImageUrl}?txt=${imageInfo.myText}&blend=${imageInfo.myColorOverlay}`;

  return (
    <div className="App">
      <h1>Create Your imgix Image</h1>
      <SubmitInput
        onSendInput={(imageInfo) => setMyImageUrl(`${imageInfo.myImageUrl}?txt=${imageInfo.myText}&blend=${imageInfo.myColorOverlay}`)}
      />
      <img src={myImageUrl} alt="My Image" />
    </div>
  );
}

export default App;
