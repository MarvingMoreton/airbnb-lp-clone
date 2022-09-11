import React from "react"



export default function Card(props) {
  // console.log(props.openSpots)
  // console.log(props.item)
// conditionning if openSpots === 0 display SOLD OUT badge OR if location === online display badge "ONLINE"
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

    return (
      <div className="card">
        {badgeText &&  <div className="card--badge">{badgeText}</div>}
        <img src={`./public/assets/${props.item.coverImg}`} className="card--image" />
        <div className="card--stats">
            <i className="fa-solid fa-star card--star"></i>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) •</span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
    )
}
