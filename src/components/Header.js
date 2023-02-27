import TrollFace from "../images/trollface2.png"

function Header() {
  return (
    <nav>
      <div className="nav--heading">
        <img className="nav--heading--image" src={TrollFace} alt='memeface'/>
        <p className="nav--heading--text">Meme Generator</p>
      </div>
      <p className="nav--subheading">React course - Project 3</p>
    </nav>
  );
}

export default Header;