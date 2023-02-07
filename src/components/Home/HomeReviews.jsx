import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getReviews } from "../../api/reviews.api";

export const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchData = () => {
    getReviews()
      .then(({ data }) => {
        setReviews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(
    () => fetchData(),
    // call on first render only - no dependencies
    []
  );
  console.log("Hi reviews: ", reviews);
  return (
    reviews.length>0 ?
    <div>
      <h1>{reviews[0].name}</h1>
      <p>{reviews[0].message}</p>
    </div> :
    <div>No reviews</div>
  );
};
