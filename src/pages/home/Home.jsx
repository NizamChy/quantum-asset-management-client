import About from "../about/About";
import Packages from "../packages/Packages";
import Banner from "./Banner";


const Home = () => {
  return (
    <div>
      {/* <h2 className="text-2xl text-center mt-10">This is Home.</h2> */}
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
    </div>
  );
};

export default Home;