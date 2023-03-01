import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysArray, setToysArray] = useState([])

  useEffect(()=>{

    fetch ("http://localhost:3001/toys")
      .then(r => r.json())
      .then(setToysArray)

  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToySubmit (newToyObj) {
    setToysArray([...toysArray, newToyObj])

    fetch ("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify(newToyObj)
    })
  }

  function handleDonateFetch (deleteID) {
    // Update DOM
    const trimmedArray = toysArray.filter((eachToy)=>{
      return (eachToy.id !== deleteID)
    })
    setToysArray(trimmedArray)

    fetch(`http://localhost:3001/toys/${deleteID}`,{
      method:"DELETE"
    })
  }

  function handleLikesIncrement(updateID,likes) {
    // need to iterate through toys array and look for an object with id
    // equal to id of card. 
    // Once found, needs to setState by passing new array through that is
    // copy of old array, but has a new key value pair for a certain object
    // which will probably have to be referenced with an array index

    // Optimistic Solution
    // use findIndex

    // const ObjectToUpdate = toysArray.find(eachObj => {
    //   return (eachObj.id === updateID) 
    // })

    // const updatedObject = {...ObjectToUpdate, likes: likes+1}
    // const updatedToysArray = 

  

  function handlePessimisticUpdate(updatedObjectfromServer){
      const updatedArray = toysArray.map(eachObj => {
        if(eachObj.id === updateID) {
          return updatedObjectfromServer
        } else {
          return eachObj
        }
      })
      setToysArray(updatedArray)
    }
    

    fetch(`http://localhost:3001/toys/${updateID}`, {
      method: "PATCH",
      headers: {"Content-type" : "application/json" },
      body: JSON.stringify({likes: likes + 1})
    })
      .then(r=> r.json())
      .then(updatedObj => handlePessimisticUpdate(updatedObj))
  }

  

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToySubmit = {handleNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        handleLikesIncrement = {handleLikesIncrement}
        toysArray = {toysArray} 
        handleDonateFetch = {handleDonateFetch}
      />
    </>
  );
}

export default App;
