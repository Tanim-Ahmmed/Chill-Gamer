import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user, theme } = useContext(AuthContext);

  const { displayName, email } = user;



  const handleAddReview = (e) =>{
        e.preventDefault();
    const form = e.target;

    const userName = form.name.value;
    const userEmail = form.email.value;
    const coverImage = form.photo.value;
    const title = form.title.value;
    const publishingYear = form.publishingYear.value;
    const rating = form.rating.value;
    const genre = form.genres.value;
    const reviewDescription = form.description.value;


    const reviewData = {userName, userEmail, coverImage, title, publishingYear, rating, genre, reviewDescription}

    console.log(reviewData);


    fetch("https://chill-gamer-server-five.vercel.app/reviews", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){

        Swal.fire({
          title: "Congrats!",
          text: "Your Game Review Added Successfully!",
          icon: "success"
        });
      }
    })


  }

  return (
    <div className="min-h-screen flex justify-center items-center sm:w-11/12 mx-auto">
      <div className="hero bg-base-100 min-h-screen ">
        <div className={`card w-full shrink-0 rounded-none p-10 md:max-w-[800px] ${theme === 'dark' ? 'bg-gray-700' : 'bg-orange-200'}`}>
          <div className="text-center">
            <h1 className="text-2xl font-bold "> Add New Review</h1>
          </div>
          <form onSubmit={handleAddReview} className="card-body">
            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={displayName}
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  readOnly
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Game Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Game title"
                  className="input input-bordered input-warning rounded-none w-full border-2 "
                  required
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Cover Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Game photo URL"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Publishing year</span>
                </label>
                <input
                  type="number"
                  name="publishingYear"
                  placeholder="Game publishing year"
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  required
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating (1-5)</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Game Rating"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  required
                />
              </div>
            </div>




            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control md:w-2/3">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Review Description"
                  className="textarea textarea-bordered textarea-warning rounded-none w-full border-2"
                  required
                />
              </div>

              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Genres</span>
                </label>
                <select
                  name="genres"
                  className="select select-bordered rounded-none w-full select-warning border-2"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Genre
                  </option>
                  <option value="Action">Action</option>
                  <option value="RPG">RPG</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning hover:border-orange-400 rounded-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
