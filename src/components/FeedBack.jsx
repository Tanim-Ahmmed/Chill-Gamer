import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedBack = () => {
  const handleFeed = (e) => {
    e.preventDefault();
    const form = e.target
    const feed = form.feedback.value;

    toast.success("Thanks for share your feedback", {
      position: "top-center",
      autoClose: 3000,
    });
   form.reset();
  };

  return (
    <div>
      <div className="feedback-section my-12 ">
        <h2 className="text-2xl font-semibold py-6 text-center"> Feedback</h2>
        <p className="mb-4 text-gray-600 text-center">
          Share Your feedback with us, it's helps us to improve!
        </p>
        <form onSubmit={handleFeed} className="space-y-4">
          <textarea
            name="feedback"
            rows="4"
            placeholder="Write your feedback here..."
            className="w-full p-3 border rounded-lg shadow-sm"
            required
          ></textarea>
          <div className="w-full">
            <button
              type="submit"
              href="#"
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow hover:bg-orange-400 transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
