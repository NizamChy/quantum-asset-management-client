import { Link } from "react-router-dom";

const LoginAll = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="flex justify-center items-center space-x-40">
          {/* Admin Section */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">For HR/Admin</h2>
            <div className="flex flex-col space-y-4">

              <Link to="/adminregister">
              <button className="bg-white text-blue-500 px-4 py-2 rounded">
                Register Now
              </button>
              </Link>

              <Link to="/adminlogin">
              <button className="bg-white text-blue-500 px-10 py-2 rounded">
                Log In
              </button>
              </Link>


            </div>
          </div>

          {/* Employee Section */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">For Employee</h2>
            <div className="flex flex-col space-y-4">

              <Link to="/employeeregister">
              <button className="bg-white text-blue-500 px-4 py-2 rounded">
                Register Now
              </button>
              </Link>

              <Link to="/employeelogin">
              <button className="bg-white text-blue-500 px-10 py-2 rounded">
                Log In
              </button>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAll;
