function Hello() {



  const getName = (yourname) => {
    return yourname;
  };


  const handalClick = () => {
    alert("Button was clicked");
  };

  const handalInput = (event) => {
    console.clear();
    console.log("input value is", event.target.value);

  }
  

  const F_name = "Digvijay";
  const L_name = "Thavare";
  const age = 21;

  const handalMouseOver = () => {
    console.log("Mouse is over the paragraph");
  }
  const handalDoubleClick = () => {
    console.log("Paragraph was double-clicked");
  }

  return (
    <>
      <h1 className="text-4xl text-red-400 ">First Name:{getName(F_name)}</h1>
      <h2 className="text-4xl text-red-300 ">Last Name: {getName(L_name)}</h2>


      <p onMouseOver={handalMouseOver} onDoubleClick={handalDoubleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <h3 className="text-4xl text-pink-700 ">Age is {getName(age)}</h3>
      <button onClick={handalClick}>Click Me</button> <br/>
      <button onClick={()=> alert("hello world")}>Say Hello!!</button> <br/>
      <input type="text" placeholder="Enter your name" onChange={handalInput}/>
    </>
  );
}

export default Hello;
