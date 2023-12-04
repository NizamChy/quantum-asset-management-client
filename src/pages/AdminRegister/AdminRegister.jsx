import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";

import { app } from "../../firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const AdminRegister = () => {
  const [startDate, setStartDate] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();



  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const birthDate = form.birthDate.value;
    const email = form.email.value;
    const password = form.password.value;
    const userPhoto = form.userPhoto.value;
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
          // birthDate: birthDate,
          photoURL: userPhoto,
          email: email,
        })
          .then(() => {
            console.log(result.user);
            toast.success("Sign-up successful");
            navigate(location?.state ? location.state : "/");

            // Reload the page after 2 seconds
            setTimeout(() => {
              window.location.reload();
            }, 2000); // 2000 milliseconds = 2 seconds
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
          <div className="hero-content flex flex-col-2">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 ">
              <form onSubmit={handleSignUp} className="card-body grid grid-cols-2 gap-6">
                {/* user name */}
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
                {/* date of birth */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Date of Birth</span>
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
                {/* email */}
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
                {/* password */}
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
                </div>
                {/* company name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="company name"
                    name="companyName"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* company logo */}
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Company Logo</span>
                  </label>
                  <input
                    type="text"
                    name="companyLogo"
                    placeholder="company logo"
                    className="input input-bordered"
                    
                  />
                </div> */}
                 {/* user photo url  */}
                 <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    name="userPhoto"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* user photo url  */}
                {/* select a package */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Select a Package</span>
                  </label>
                  <select
                    name="package"
                    className="input input-bordered"
                    required
                  >
                    <option value="">Select a Package</option>
                    <option value="5">5 Members for $5</option>
                    <option value="10">10 Members for $8</option>
                    <option value="20">20 Members for $15</option>
                  </select>
                </div>
                {/* buttons */}
                <div className="form-control col-span-2 mt-6">
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
                        {/* Google logo or icon here */}
                      </span>
                      <span className="text-lg ml-2">Continue with Google</span>
                    </div>
                  </button>
                </div>
                <div className="col-span-2">
                  <p>
                    Already have an account?{' '}
                    <Link to="/employeelogin">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                      >
                        Login
                      </button>{' '}
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

export default AdminRegister;
