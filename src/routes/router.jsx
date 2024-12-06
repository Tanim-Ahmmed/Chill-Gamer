import {  createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../layouts/Home";
import Root from "../Root";
import AllReviews from "../layouts/AllReviews";
import AddReview from "../layouts/AddReview";
import MyReview from "../layouts/MyReview";
import WatchList from "../layouts/WatchList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../layouts/Auth";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },

        {
          path:"/allreviews",
          element:<AllReviews></AllReviews>,
          loader: () => fetch("http://localhost:5000/reviews"),
        },
        {
            path:"/addreview",
            element:<PrivateRoute>
                       <AddReview></AddReview>
                   </PrivateRoute>,
        },
        {
            path:"/myreviews",
            element:<PrivateRoute>
                       <MyReview></MyReview>
                   </PrivateRoute>,
             loader: () => fetch("http://localhost:5000/reviews"),

        },
        {
            path:"/gamewatchlist",
            element:<PrivateRoute>
                       <WatchList></WatchList>
                   </PrivateRoute>,
        },
        {
            path:"/auth",
            element:<Auth></Auth>,
            children:[
                {
                   path:"login",
                   element:<Login></Login>,
                },
                {
                    path:"register",
                    element:<Register></Register>,
                },
                {
                    index: true, 
                    element: <Navigate to="login" replace />,
                  },
            ],
        },


      ],
    },
  ]);

  export default router;