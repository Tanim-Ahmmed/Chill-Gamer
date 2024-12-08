import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import img1 from "../assets/bnnn.png";
import img2 from "../assets/bnn5.jpg";
import img3 from "../assets/bnn3.webp";
import img4 from "../assets/bnn4.jpg";

import { Fade } from "react-awesome-reveal";

const Home = () => {
  const reviews = useLoaderData();
  return (
    <div className="sm:w-11/12 mx-auto min-h-screen ">
      {/* bannder slider  */}
      <Fade>
      <div className="carousel w-full mb-10 max-h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      </Fade>

     
        <div className="grid grid-cols-1  m-6 sm:m-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      
    </div>
  );
};

export default Home;
