import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {
    _id,
    userName,
    userEmail,
    coverImage,
    title,
    publishingYear,
    rating,
    genre,
    reviewDescription,
  } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <Fade>
        <figure>
          <img
            src={coverImage}
            alt="GameCover"
            className="object-cover w-full aspect-[3/2]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-warning">{rating}</div>
          </h2>
          <p>{reviewDescription.split(" ").slice(0,10).join(" ")}</p>
         

          <div className="mt-6 text-center">
            <Link
              to={`/reviewDetails/${_id}`}
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow hover:bg-orange-400 transition"
            >
             Explore Details
            </Link>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default ReviewCard;
