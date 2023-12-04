import Swal from "sweetalert2";
import useMyAssets from "../../hooks/useMyAssets";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyAssets = () => {

  const [myAssets, refetch] = useMyAssets();

  const axiosSecure = useAxiosSecure();

  const handleCancel = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/myassets/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
}


  return (
    <div>
      <h2 className="text-center text-2xl p-4 font-semibold">My assets: {myAssets.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {myAssets.map((asset) => (
        <div key={asset._id} className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={asset.image}
              className="h-48 w-full object-cover"
              alt={asset.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{asset.name}</h2>
            <p>Type : {asset.type}</p>
            <p>{asset.date}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Pending</button>


              <button onClick={() => handleCancel(asset._id)}
               className="btn btn-primary">Cancel</button>


            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyAssets;
