function Meme() {
  const handleClick = () => {
    console.log('i was clicked');
  }
  return (
    <form>
      <input
        className="form--text-field top"
        type="text"
        placeholder="shut up" />
      <input
        className="form--text-field bottom"
        type="text"
        placeholder="and take my money" 
      />
      <button        
        className="form--newmeme"
        type="button"
        onClick={handleClick}
      >Get a new meme image</button>
    </form>
  );
}

export default Meme;