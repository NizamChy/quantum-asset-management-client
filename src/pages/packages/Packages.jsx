

const Packages = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl text-center mb-10">Available Packages</h2>

      <div className="flex flex-wrap justify-center">
        {/* Package 1 */}
        <div className="max-w-sm mx-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Maximum 5 employees</h3>
            <p className="text-gray-600 mb-4">$5 per month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Select Package
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="max-w-sm mx-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Maximum 10 employees</h3>
            <p className="text-gray-600 mb-4">$8 per month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Select Package
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div className="max-w-sm mx-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Maximum 20 employees</h3>
            <p className="text-gray-600 mb-4">$15 per month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Select Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
