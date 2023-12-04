import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/home/banner1.png'
import img2 from '../../assets/home/banner2.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
       <Carousel>
                <div className="max-h-[75vh]">
                    <img className="rounded-lg" src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                   <Link to="/employeeregister">  <button className="btn  legend ">Join as Employee</button> </Link>
                </div>
                <div className="max-h-[75vh]">
                    <img className="rounded-lg" src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                    <Link to="/adminregister">
                    <button className="btn  legend ">Join as HR/Admin</button>
                    </Link>
                    
                </div>

            </Carousel>
    </div>
  );
};

export default Banner;