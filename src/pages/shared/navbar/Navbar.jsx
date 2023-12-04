import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Function to conditionally generate button classes
  const getButtonClasses = (isActive, isPending) =>
    isPending ? "pending" : isActive ? "underline" : "";

  // Define the classes outside of the JSX
  const logoutButtonClasses = getButtonClasses(false, false);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* for no user exist  */}

              {!user && (
                <>
                  <li>
                    <NavLink
                      to="/employeelogin"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }
                    >
                      Join as Employee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adminregister"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }
                    >
                      Join as HR/Admin
                    </NavLink>
                  </li>
                </>
              )}

              {/* for no user exist  */}

              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className={logoutButtonClasses}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login" className={logoutButtonClasses}>
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-md md:text-xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
            Quantum Asset Management
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                Home
              </NavLink>
            </li>

            {/* navlist for admin  */}
            {
              isAdmin ? <> 
                <li>
                  <NavLink
                    to="/assetlist"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    Asset List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addasset"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    Add an Asset
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allrequest"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    All Request
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/users"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    My Emloyee List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </> : <>
              
              </>
            }
            {/* navlist for admin  */}

            {/* for employee afer login  */}
            {
              user && !isAdmin && (
                <>
             <li>
              <NavLink
                to="/myassets"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                <button>
                  My Assets
                  
                </button>
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/requestasset"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                <button>
                  Request for an Asset
                  
                </button>
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                <button>
                  Profile
                  
                </button>
              </NavLink>
            </li>
                </>
              )
            }
            {/* for employee afer login  */}

            {!user && (
              <>
                <li>
                  <NavLink
                    to="/employeelogin"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    Join as Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/adminregister"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "underline" : ""
                    }
                  >
                    Join as HR/Admin
                  </NavLink>
                </li>
              </>
            )}

            <li>
              {user ? (
                <button onClick={handleLogOut} className={logoutButtonClasses}>
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className={logoutButtonClasses}>
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* user  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              
              <div className="w-10 rounded-full">
              {user && user?.photoURL ? (
                  <img src={user?.photoURL} alt="User Avatar" />
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                )}

              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user && (
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      {user?.displayName}
                    </span>
                  )}
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
                {user && (
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "blue",
                    }}
                  >
                    {user?.email}
                  </span>
                )}
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className={getButtonClasses(false, false)}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className={getButtonClasses(false, false)}
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          {/* user  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
