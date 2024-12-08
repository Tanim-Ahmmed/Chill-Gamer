import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";
import { HiSortDescending } from "react-icons/hi";

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

  const handleGenres = (e) =>{
    const genre = e.target.value;
       console.log(genre)

      
    fetch(`https://chill-gamer-server-five.vercel.app/reviews?genre=${genre}`)
    .then(res => res.json())
    .then(data => {
      setReviews(data);
    })
  }
  return (
    <div className="sm:w-11/12 mx-auto my-8">
      <div className="flex justify-between p-6 my-6 shadow-md rounded-md">
        <h2 className="text-lg font-semibold hidden sm:flex">Sort by </h2>
        <div className="flex gap-4 ">


           
        <select
            id="genre-filter"
            onChange={(e) => handleGenres(e)}
            className="mt-1 block w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 hover:ring-orange-400 hover:border-orange-400 focus:border-orange-500 sm:text-sm"
          >
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option> 
          </select>
          
         <button onClick={()=>handleSort("R")} className="flex items-center justify-center gap-2 bg-base-100 border border-orange-500 px-2 rounded-xl hover:bg-orange-400 hover:text-white">Rating <HiSortDescending /> </button>
         <button onClick={() =>handleSort("Y")} className="flex items-center justify-center gap-2 bg-base-100 border border-orange-500 px-2 rounded-xl hover:bg-orange-400 hover:text-white">Year<HiSortDescending /></button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 m-6 sm:m-0  md:grid-cols-2 lg:grid-cols-3 gap-4">
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












