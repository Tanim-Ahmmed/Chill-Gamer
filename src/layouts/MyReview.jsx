import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";


const MyReview = () => {
  const { user } = useContext(AuthContext);

  const loadedReviews = useLoaderData();

  const [reviews , setReviews] = useState(loadedReviews);

  const myReviews = reviews?.filter((review) => review.userEmail == user?.email) || [];



  const handleDelete =(id)=>{
    console.log(id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


          fetch(`https://chill-gamer-server-five.vercel.app/reviews/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                  
                Swal.fire({
                    title: "Deleted!",
                    text: "Your review has been deleted.",
                    icon: "success"
                  });
                  const remaining = myReviews.filter((rev => rev._id !== id ));
                  setReviews(remaining);
            }
          })
        }
      });
  }
  return (
    <div className="sm:w-11/12 mx-auto min-h-screen flex justify-center my-8">
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
                    <Link to={`/updatereview/${review._id}`}>
                    <button className="text-lg text-orange-400 pr-6" ><FaRegEdit /></button>
                    </Link>
                    <button 
                    onClick={()=> handleDelete(review._id)}
                    className="text-lg text-red-600">
                    <MdDeleteForever /></button>
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
