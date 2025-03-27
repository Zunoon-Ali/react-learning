import React from 'react'
import "./card.css";

const card = (props) => {
  return (
    <div className="card">
    <div className="card-title">
      <h3>{props.title}</h3>
    </div>
    <div className="card-body">
      {props.desc}
    </div>
  </div>
  
  )
}

export default card
