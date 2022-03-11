import React, { useState } from "react";
import SubmitInput from "./Components/SubmitInput";
import "./App.css";
import placeholderImage from "./images/placeholder-image.jpg";

function App() {
  const [myImageUrl, setMyImageUrl] = useState(placeholderImage);

  return (
    <div className="App">
      <h1>Create Your imgix Image</h1>
      <div className="interface">
        <SubmitInput
          onSendInput={(imageInfo) =>
            setMyImageUrl(
              `${imageInfo.myImageUrl}?txt=${imageInfo.myText}&blend=${imageInfo.myColorOverlay}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`
            )
          }
        />
        <div className="imgPrev">
          <img src={myImageUrl} alt="Rendered Work" />
        </div>
      </div>
    </div>
  );
}

export default App;
