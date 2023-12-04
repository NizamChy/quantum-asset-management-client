

const UpdateAsset = () => {
  return (
    <div>
          <div className=" p-24 pb-10 pt-10 rounded">
      <div>
      <h2 className="text-xl font font-extrabold text-center mb-4">Update an Asset</h2>
      </div>

      <form >
        {/* form row Image and Name*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Product name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="product name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Image url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="product image url"
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Brand Name and Type*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
          <label className="label">
      <span className="label-text font-semibold">Product Date</span>
    </label>
    <label className="input-group">
      <input
        type="date"
        placeholder="Date"
        name="date"
        className="input input-bordered w-full"
      />
    </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Product Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="product type"
                name="type"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
        
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Product Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>


        </div>
        
        <div>



          <div className="flex justify-center">
          <button type="submit" className="mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Product</button>
          </div>



        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateAsset;