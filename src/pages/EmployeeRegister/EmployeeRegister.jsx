import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";

import { app } from "../../firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const EmployeeRegister = () => {
  const [startDate, setStartDate] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const axiosPublic = useAxiosPublic();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res.data)
        })
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignUp = (e) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosPublic = useAxiosPublic();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userPhoto = form.userPhoto.value;
    const birthDate = form.birthDate.value;
    const email = form.email.value;
    const password = form.password.value;

    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(
      password
    );

    if (password.length < minLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!hasCapitalLetter) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }
    if (!hasSpecialCharacter) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    //   console.log(email, password);
    // Create the user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Set the displayName for the user
        updateProfile(result.user, {
          displayName: name,
          photoURL: userPhoto,
          // birthDate: birthDate,
          email: email,
        })
          .then(() => {
            console.log(result.user);
            //create user entry in the database
            const userInfo = {
              name: name,
              email: email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
              if(res.data.insertedId){
                console.log("user added to database.")
                toast.success("Sign-up successful");
                navigate(location?.state ? location.state : "/");
    
                // Reload the page after 2 seconds
                setTimeout(() => {
                  window.location.reload();
                }, 2000); // 2000 milliseconds = 2 seconds
              }
            })


          })
          .catch((error) => {
            console.error("Error updating displayName: ", error);
          });

        // new user has been created
        // const createdAt = result.user.metadata?.creationTime;

        // const user = { email, createdAt };
        // fetch("https://brand-shop-server-six-vert.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       console.log("user added to the database");
        //     }
        //   });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  

  return (
    <div className="min-h-[100vh]">
      <ToastContainer />
      {/* Sign up */}
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignUp} className="card-body">
                {/* user name  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* user name  */}

                 {/* user photo url  */}
                 <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      User Photo Url
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="user photo url"
                    name="userPhoto"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* user photo url  */}

                {/* date of birth */}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Date of Birth
                    </span>
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="select date of birth"
                    name="birthDate"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* date of birth */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2"
                  >
                    Register
                  </button>

                  <button
                    onClick={handleGoogle}
                    type="button"
                    className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
                  >
                    <div className="flex justify-center">
                      <span>
                        <svg
                          className="h-8 w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fbc02d"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#e53935"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4caf50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1565c0"
                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-lg ml-2">Continue with Google</span>
                    </div>
                  </button>
                </div>

                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/employeelogin">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                      >
                        Login
                      </button>{" "}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Sign up */}
    </div>
  );
};

export default EmployeeRegister;
