import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysArray, handleDonateFetch, handleLikesIncrement}) {

  return (
    <div id="toy-collection">{toysArray.map((eachToy)=>{
      return (
        <ToyCard 
          key = {eachToy.id } 
          toyData = {eachToy}
          handleDonateFetch = {handleDonateFetch}
          handleLikesIncrement = {handleLikesIncrement}
        />)
    })}
    </div>
  );
}

export default ToyContainer;
