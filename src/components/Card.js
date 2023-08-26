import React from "react";

export default function Card (props) {
    let badgeText = props.openSpots == 0 ? 'SOLD OUT' : (props.status === 'Online' ? 'ONLINE' : null)

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} className="card-image"/>
            <div className="card-stats">
                <img src="/images/star.png" className="stats-star" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})</span>   
                <span>{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}