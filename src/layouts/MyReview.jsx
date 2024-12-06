import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const MyReview = () => {
  const { user } = useContext(AuthContext);
  const reviews = useLoaderData();

  const myReviews =
    reviews?.filter((review) => review.userEmail == user?.email) || [];

  console.log(myReviews);
  return (
    <div className="md:w-11/12 mx-auto min-h-screen flex justify-center my-8">
      <div className="w-full sm:p-10 ">
        <h3 className="text-xl font-bold text-orange-400 text-center py-6">My Reviews</h3>

        <div className="overflow-x-auto">
          <table className="table">
            
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th className="hidden sm:flex" >Genre</th>
                <th>Publishing year</th>
                <th>Action</th>
              </tr>
            </thead>

            {myReviews.map((review, i) => (
              <tbody key={review._id} >
                <tr>
                  <th>{i+1}</th>
                  <td>{review.title}</td>
                  <td className="hidden sm:flex">{review.genre}</td>
                  <td>{review.publishingYear}</td>
                  <td>
                    <button className="text-lg text-orange-400 pr-6" ><FaRegEdit /></button>
                    <button className="text-lg text-red-600"><MdDeleteForever /></button>
                  </td>
                  
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
