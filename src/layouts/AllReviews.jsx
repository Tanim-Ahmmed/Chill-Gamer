import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";

const AllReviews = () => {
  const initialReviews = useLoaderData();

  const [reviews, setReviews] = useState(initialReviews);

  const handleSort =(sort) =>{
    
    fetch(`https://chill-gamer-server-five.vercel.app/reviews?sort=${sort}`)
    .then(res => res.json())
    .then(data => {
      setReviews(data);
    })

  }
  return (
    <div className="sm:w-11/12 mx-auto my-8">
      <div className="flex justify-between p-6 my-6 shadow-md rounded-md">
        <h2 className="text-lg font-semibold">Sort by </h2>
        <div className="flex gap-4">
          
         <button onClick={()=>handleSort("R")}>R</button>
         <button onClick={() =>handleSort("Y")}>Y</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewCard
           key={review._id}
           review={review}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
