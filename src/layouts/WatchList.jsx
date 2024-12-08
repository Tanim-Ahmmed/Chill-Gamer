import { useLoaderData } from "react-router-dom";


const WatchList = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="sm:w-11/12 mx-auto min-h-screen flex justify-center my-8">
        <div className="w-full sm:p-10 ">
          <h3 className="text-xl font-bold text-orange-400 text-center py-6">My WatchList</h3>
  
          <div className="overflow-x-auto">
            <table className="table">
              
              <thead>
                <tr>
                  <th className="hidden sm:flex"></th>
                  <th>Cover Image</th>
                  <th>Title</th>
                  <th className="hidden sm:flex " >Genre</th>
                  <th >Publishing year</th>
                </tr>
              </thead>
  
              {data.map((review, i) => (
                <tbody key={review._id} >
                  <tr>
                    <th className="hidden sm:flex">{i+1}</th>
                    <th><img src={review.coverImage} alt="" className="w-20 h-14 object-cover rounded-xl" /></th>
                    <td>{review.title}</td>
                    <td className="hidden sm:flex sm:mt-3">{review.genre}</td>
                    <td >{review.publishingYear}</td>
                    <td>
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

export default WatchList;