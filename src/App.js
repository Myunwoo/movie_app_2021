import React from "react";

function Food({fav}){
  return(
    <h1>I like {fav}</h1>
  );
}

const foodILike = [];

function App() {
  return (
    <div className="App">
      Hello!
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="beer" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
