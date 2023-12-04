import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {

  const {user} = useContext(AuthContext);




  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src={user?.photoURL}
            alt="User's Profile"
            className="rounded-full h-20 w-20 object-cover"
          />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>
          {/* <p className="text-gray-500">{user.dob}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
