import React from "react"



export default function Card(props) {
  // console.log(props)
    return (
      <div className="card">
        <img src={`./src/assets/${props.img}`} className="card--image" />
        <div className="card--stats">
            <i class="fa-solid fa-star card--star"></i>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) •</span>
            <span className="gray">{props.country}</span>
        </div>
        <p>Life Lessons with {props.firstName}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
    )
}
