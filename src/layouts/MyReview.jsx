
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import MyReviewItem from "../components/MyReviewItem";

const MyReview = () => {
     
    const {user} = useContext(AuthContext);
    const reviews = useLoaderData();

    const myReviews = reviews?.filter(review => review.userEmail == user?.email)|| [];

    console.log(myReviews);
    return (
        <div>
         <div>
            review: {myReviews.length}
            {myReviews.map((review) => (
          <MyReviewItem
           key={review._id}
           review={review}
          ></MyReviewItem>
        ))}
            </div>
        </div>

    );
};

export default MyReview;