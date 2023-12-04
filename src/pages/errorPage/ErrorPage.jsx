import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <img className="w-56 h-56" src="https://i.ibb.co/2qrD73T/image.png" alt="error" />
      </div>
      <div><h4 className="text-red-400 text-4xl text-center p-8">Oopps! Page not found. Something went wrong!</h4></div>
      
      <div><Link to="/"><button className="btn btn-error">Go Home</button></Link></div>
      
    </div>
  );
};

export default ErrorPage;