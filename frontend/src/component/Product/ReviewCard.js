import React from 'react'
import ReactStars from 'react-rating-stars-component';
import profilePng from "../../images/Profile.png";

const ReviewCard = ({review}) => {
        const options = {
            edit: false,
            size: window.innerWidth < 600 ? 20 : 25,
            value: review.rating,
            readOnly: true,
            precision: 0.5,
            color: "rgba(20, 20, 20, 0.1)",
            activeColor: "tomato",
        };
    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            <ReactStars {...options} />
            <span className="reviewCardComment">{review.comment}</span>
        </div>
    )
}

export default ReviewCard
