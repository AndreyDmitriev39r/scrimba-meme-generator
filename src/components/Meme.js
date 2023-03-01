import { useState } from "react";
import tempData from "../temp_data";

function Meme() {

  // helper functions

  const pickRandomEl = arr => arr[Math.floor(Math.random() * arr.length)]

  const handleClick = () => {
    setStuff(
      (prevStuff) => ({...prevStuff, image: pickRandomEl(tempData).image})
    );
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setStuff((prevStuff) => (
      {...prevStuff, [name] : value}
    ))
  }

  // state
  const [stuff, setStuff] = useState(pickRandomEl(tempData))

  return (
    <>
      <form>
        <input
          className="form--text-field top"
          type="text"
          placeholder="shut up"
          name="topText"
          value={stuff.topText}
          onChange={handleChange}
        />
        <input
          className="form--text-field bottom"
          type="text"
          placeholder="and take my money" 
          name="bottomText"
          value={stuff.bottomText}
          onChange={handleChange}
        />
        <button        
          className="form--newmeme"
          type="button"
          onClick={handleClick}
        >Get a new meme image</button>
      </form>
      <div className="tempStuff">
        <p>{stuff.bottomText}</p>
        <p>{stuff.image}</p>
        <p>{stuff.topText}</p>
      </div>
    </>
  );
}

export default Meme;