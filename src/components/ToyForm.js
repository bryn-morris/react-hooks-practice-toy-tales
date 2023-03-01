import React, {useState} from "react";

function ToyForm({handleNewToySubmit}) {

  const [newToy, setNewToy] = useState({name:"", image: "", likes: 0})

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleNewToySubmit(newToy)
  }

  const onChangeHandler = (e) => {
    if(e.target.name === "name") {
      setNewToy({...newToy, name: e.target.value})
    } else if (e.target.name === "image") {
      setNewToy({...newToy, image: e.target.value})
    } 

  }

  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {onSubmitHandler}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {onChangeHandler}
          value = {newToy.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          onChange = {onChangeHandler}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
