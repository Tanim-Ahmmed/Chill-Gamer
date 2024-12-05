const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-orange-300 text-center">
        <h1 className="text-[10rem] font-bold text-black m-0">404</h1>
        <p className="text-xl text-black my-4">Sorry, the page not found</p>
        <button
          className="px-8 py-3 text-white bg-black rounded-md text-lg hover:bg-gray-800"
          onClick={() => (window.location.href = "/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
