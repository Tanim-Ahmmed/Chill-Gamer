
const ReviewCard = ({ review }) => {
    const {userName, userEmail, coverImage, title, publishingYear, rating, genre, reviewDescription} = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
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
          <p>{reviewDescription}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
