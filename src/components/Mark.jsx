import Marquee from "react-fast-marquee";
import { IoFlower } from "react-icons/io5";
const Mark = () => {
    return (
        <div className="flex gap-2 bg-base-100 p-2 mb-4">
      <p className=" bg-orange-400 text-white px-2 py-1 font-semibold ">
       Wellcome
      </p>
      <Marquee pauseOnHover speed={100}>
        <div className="space-x-2 flex">
          <p className="flex gap-3"> Explore and make the most of your experience with <span className="text-orange-500 flex gap-2">Chill Gamer....   <IoFlower />  </span></p>
        </div>
      </Marquee>
    
            
        </div>
    );
};

export default Mark;