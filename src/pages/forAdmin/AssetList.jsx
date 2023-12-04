import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMyAssets from "../../hooks/useMyAssets";

const AssetList = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosPublic();
  const [assets, setAssets] = useState([]);
  const [isAdmin] = useAdmin();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useMyAssets();

  useEffect(() => {
    axiosInstance
      .get("/assets")
      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, [axiosInstance]);

  const handleUpdate = (assetId) => {
    // Implement your update logic here
    console.log(`Update clicked for asset with ID: ${assetId}`);
  };

  const handleAddToList = (asset) => {
    console.log(asset, user.email);
    
    if (user && user.email) {
      //send cart item to the database
      const myAssetItem = {
          assetId: asset._id,
          email: user.email,
          name: asset.name,
          image: asset.image,
          quantity: asset.quantity,
          type: asset.type,
          date: asset.date
      }

      console.log(myAssetItem)
      axiosSecure.post('/myassets', myAssetItem)
          .then(res => {
              console.log(res.data)
              if (res.data.insertedId) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${asset.name} added to my assets`,
                      showConfirmButton: false,
                      timer: 1500
                  });
                  // refetch cart to update the cart items count
                  refetch();
              }

          })

  }
}

  const handleDelete = (assetId) => {
    axiosInstance
      .delete(`/assets/${assetId}`)
      .then((response) => {
        // Assuming a successful delete results in an empty response
        console.log(`Successfully deleted asset with ID: ${assetId}`);
        // Update the local state to reflect the deleted asset
        setAssets((prevAssets) =>
          prevAssets.filter((asset) => asset._id !== assetId)
        );
        // Show a success toast
        toast.success("Asset deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error(`Error deleting asset with ID ${assetId}:`, error);
        // Show an error toast
        toast.error("Error deleting asset. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {assets.map((asset) => (
        <div key={asset._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={asset.image}
              alt={asset.name}
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{asset.name}</h2>
            <p>Type: {asset.type}</p>
            <p>Quantity: {asset.quantity}</p>
            <p>Date Added: {asset.date}</p>
            <div className="card-actions justify-end">
              {isAdmin ? (
                <>
                  <Link to="/updateasset">
                    <button className="btn btn-primary">Update</button>
                  </Link>

                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(asset._id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                <button className="btn btn-primary">Available</button>
                <button onClick={() => handleAddToList(asset)} className="btn btn-secondary">Request</button>

                </>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AssetList;
