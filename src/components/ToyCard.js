import React from "react";

function ToyCard({handleDonateFetch, handleLikesIncrement, toyData: {name, image, id, likes, }}) {

  function onClickDonate (e) {
    handleDonateFetch(id)
  }

  function onClickLike () {
    handleLikesIncrement (id,likes) 
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick = {onClickLike}>Like {"<3"}</button>
      <button className="del-btn" onClick = {onClickDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
