import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const review = useLoaderData();
  const {user} = useContext(AuthContext);
  const { displayName, email } = user;
  console.log(displayName, email)

  const {
    userName,
    userEmail,
    coverImage,
    title,
    publishingYear,
    rating,
    genre,
    reviewDescription,
  } = review;

  console.log(review);

  const handleWishList = () =>{
       
    const wishItem = {
      wishersName : displayName,
      wishersEmail : email,
      title : title,
      coverImage : coverImage,
      publishingYear : publishingYear,
      rating : rating,
      genre : genre,
      reviewDescription : reviewDescription
    }
   
     
  
    fetch("https://chill-gamer-server-five.vercel.app/wishList", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wishItem)
    })
    .then( res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){

        Swal.fire({
          title: "Congrats!",
          text: "Review Added to Your WishList!",
          icon: "success"
        });
      }
    })


  }

  return (
    <div className="sm:w-11/12 mx-auto py-10 ">
        
      <div
        className="hero"
        style={{
          backgroundImage:
            `url(${coverImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content ">
          <div className="max-w-md ">
            <h1 className=" text-3xl font-bold pt-8 text-center">{title}</h1>
             <p className="flex justify-start text-orange-300 mb-6">Author: {userName} <br /> Email: {userEmail}</p>
            
        <div className="flex justify-between pb-8">


            <div>
                <h2 className="text-xl font-semibold">GENRE : {genre}</h2>
            </div>

        <div className="text-sm font-bold ">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
               
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2  bg-orange-200"
                defaultChecked
              />
            </div>
            {rating}
          </div>

        </div>
         
        
            <p className="mb-5 hero-overlay bg-opacity-60 p-8 rounded-2xl font-semibold">
              {reviewDescription}
               dolor sit amet, consectetur adipisicing elit. Aliquam quibusdam cupiditate nobis ducimus provident assumenda nostrum quod accusantium officia sunt iusto perferendis dolores, at dolorem eligendi necessitatibus inventore alias facilis cumque! Delectus amet harum sunt itaque quis culpa explicabo, neque illum tenetur odio adipisci minima nihil porro voluptatum debitis rem?
            </p>


            <button onClick={ handleWishList} className="py-2 bg-orange-400 mx-auto hover:bg-white hover:text-orange-500 rounded-3xl flex gap-3 items-center text-white font-bold px-4 justify-center"> Add to WatchList   <div className="text-lg border p-2 rounded-full hover:bg-white hover:text-orange-600"><AiFillLike /></div> </button>
           
           
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ReviewDetails;
