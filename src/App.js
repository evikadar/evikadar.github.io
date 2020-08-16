import React, { useEffect } from 'react';
import './App.css';


function App() {

  // pass the images here you'd like to use
  const greyAndGreen = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
  const greyAndRed = "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1443&q=80";
  const blackAndGreen = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  const blackAndRed = "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  const [image, setImage] = React.useState(greyAndGreen);
  const [colorWall, setColorWall] = React.useState(
    "green"
  );
  const [colorRoof, setColorRoof] = React.useState(
    "black"
  );

  useEffect(() => {
    switch (colorRoof) {
      case "grey":
        switch (colorWall) {
          case "green":
            setImage(greyAndGreen);
            break;
          case "red":
            setImage(greyAndRed);
            break;
          default: 
            break;
        }
        break;
      case "black":
        switch (colorWall) {
          case "green":
            setImage(blackAndGreen);
            break;
          case "red":
            setImage(blackAndRed);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }, [colorWall, colorRoof]);



  return (
    <div className="App">
      <div class="containerFlex">
        <div class="holderFlex">
          <h1>Wall color: {colorWall}</h1>
          <button class="button green" value="green" onClick={(event) => {setColorWall(event.target.value)}}></button>
          <button class="button red" value="red" onClick={(event) => setColorWall(event.target.value)}></button>
        </div>
        <div class="holderFlex">
          <h1>Roof color:  {colorRoof}</h1>
          <button class="button grey" value="grey" onClick={(event) => setColorRoof(event.target.value)}></button>
          <button class="button black" value="black" onClick={(event) => setColorRoof(event.target.value)}></button>
        </div>
        <div class="holderFlex">
          <img src={image} alt="house"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
