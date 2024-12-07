import { useContext, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs"; 
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";




const Register = () => {
    const [showPass , setShowPass] = useState(false);
    const [err, setErr] = useState("");
    const {createUser, setUser, updateUsersProfile} = useContext(AuthContext);
     
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        createUser(email, password)
        .then(res =>{
            const user = res.user;
            setUser(user);

            updateUsersProfile({displayName:name, photoURL:photo })
            .then(res =>{
              navigate("/")
            })
            .catch(error =>{
              setErr(error)
            })

        })
        .catch(error =>{
            
           setErr(error.code);
        })

    }


    const handleLoginWithGoogle = () =>{
        
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Register your account</h1>
          </div>
          <form onSubmit={handleRegister} className="sm:card-body">

          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered rounded-none"
                required
              />
            </div>


            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password" }
                name="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
               <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn rounded-none  btn-xs bg-base-200 absolute right-3 top-12"
              >
                {showPass ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </button>
            </div>


            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                 type={showPass ? "text" : "password" }
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered rounded-none"
                required
              />
               <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn rounded-none  btn-xs bg-base-200 absolute right-3 top-12"
              >
                {showPass ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </button>
            </div>

            <div>
                { err &&  <p className="text-red-500 text-center">{err}</p> 
                   }
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
           {/* { error &&  <p className="text-red-500 text-center">{error}</p> 
           } */}

          <p className="text-center font-semibold py-3">
            Allready Have an Account?
            <Link  to="/auth/login" className="text-red-500 ml-3 font-bold">
              Login
            </Link>
          </p>
          <div  onClick={handleLoginWithGoogle} className="flex justify-center items-center gap-4 border rounded-none py-3 font-bold w-10/12 mx-auto hover:text-white hover:bg-neutral hover:cursor-pointer">
             <FcGoogle />
               <button > Sign in with Google</button>
            </div>

        </div>
      </div>
     
    </div>
    );
};

export default Register;