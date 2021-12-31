import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img-style" src={props.img} alt="avatar_img" />
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tell="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Nas"
      img="https://townsquare.media/site/812/files/2019/07/nas-drops-lost-tapes-2.jpg?w=980&q=75"
      tell="+123 456 789"
      email="nas@esco.com"
    />
    <Card
      name="Fashawn"
      img="https://static.wikia.nocookie.net/hip-hop-music/images/c/c4/Fashawn.jpg"
      tell="+279 234 5967"
      email="fash@label.com"
    />
  </div>,
  document.getElementById("root")
);
