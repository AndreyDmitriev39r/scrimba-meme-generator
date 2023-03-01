import { useState, useEffect } from "react";

function Meme() {

  let memesData;

  // helper functions

  const pickRandomEl = arr => arr[Math.floor(Math.random() * arr.length)]

  const handleClick = () => {
    setStuff(
      (prevStuff) => ({...prevStuff, image: pickRandomEl(memes).url})
    );
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setStuff((prevStuff) => (
      {...prevStuff, [name] : value}
    ))
  }

  // state

  const [stuff, setStuff] = useState({
    topText: "",
    image: 'https://i.imgflip.com/3oevdk.jpg',
    bottomText: "",
  });

  const [memes, setAllMemes] = useState([]);

  // effects  

  useEffect(() => {    
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));    
  }, [])  

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
      <figure className="image-container">
        <p className="text--top">{stuff.topText}</p>
        <img
          src={stuff.image}
          className="meme--image"
        />
        <p className="text--bottom">{stuff.bottomText}</p>
      </figure>
    </>
  );
}

export default Meme;