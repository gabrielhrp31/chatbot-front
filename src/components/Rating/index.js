import { Field } from "formik";
import React, { useRef, useState } from "react";
import { Star } from "./styles";


const Rating = ({ onClick,currentRating:defaultRating,numberOfStars, ...props }) => {
    const [currentRating, setCurrentRating] = useState(defaultRating);
    const rating = useRef(null);

    const hoverHandler = (ev) => {
        const stars = ev.target.parentElement.getElementsByClassName("star");
        const hoverValue = ev.target.dataset.value;
        Array.from(stars).forEach((star) => {
            star.style.color =
                hoverValue >= star.dataset.value ? "#FCD03F" : "gray";
        });
    };

    const setRating = (ev) => {
        const stars = rating.current.getElementsByClassName("star");
        Array.from(stars).forEach((star) => {
            star.style.color =
            currentRating >= star.dataset.value ? "#FCD03F" : "gray";
        });
    };

    const starClickHandler = (ev) => {
        let rating = ev.target.dataset.value;
        setCurrentRating(rating);
        if (onClick) {
            onClick(rating);
        }
    };

    return (
        <div
            className="rating"
            ref={rating}
            data-rating={currentRating}
            onMouseOut={setRating}
        >
            <Field type="number" name={props.name} value={currentRating} style={{display:'none'}}  />

            {[...Array(+numberOfStars).keys()].map((n) => {
                return (
                    <Star
                        className="star"
                        key={n + 1}
                        data-value={n + 1}
                        onMouseOver={hoverHandler}
                        onClick={starClickHandler}
                    >
                        &#9733;
                    </Star>
                );
            })}

        </div>
    );
};

export default Rating;
