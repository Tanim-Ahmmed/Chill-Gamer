import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const reviews = useLoaderData();
  return (
    <div className="sm:w-11/12 mx-auto my-8">
      
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
