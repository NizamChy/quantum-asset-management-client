import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import EmployeeLogin from "../pages/EmployeeLogin/EmployeeLogin";
import EmployeeRegister from "../pages/EmployeeRegister/EmployeeRegister";
import LoginAll from "../pages/LoginAll/LoginAll";
import AdminRegister from "../pages/AdminRegister/AdminRegister";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import AllUsers from "../pages/allUsers/AllUsers";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AddAsset from "../pages/forAdmin/AddAsset";
import AdminRoutes from "./AdminRoutes";
import AssetList from "../pages/forAdmin/AssetList";
import UpdateAsset from "../pages/forAdmin/UpdateAsset";
import PrivateRoutes from "./PrivateRoutes";
import MyAssets from "../pages/myAssets/MyAssets";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginAll></LoginAll>,
      },
      {
        path: "/employeelogin",
        element: <EmployeeLogin></EmployeeLogin>,
      },
      {
        path: "/employeeregister",
        element: <EmployeeRegister></EmployeeRegister>,
      },
      {
        path: "/adminregister",
        element: <AdminRegister></AdminRegister>,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/myassets",
        element: <MyAssets></MyAssets>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },

      // admin routes 
      {
        path: "/users",
        element:<AllUsers></AllUsers>,
      },
      {
        path: "/addasset",
        element:<AdminRoutes><AddAsset></AddAsset></AdminRoutes>,
      },
      {
        path: "/assetlist",
        element: <PrivateRoutes><AssetList></AssetList></PrivateRoutes>,
      },
      {
        path: "/updateasset",
        element:<UpdateAsset></UpdateAsset>,
      },
    ],
  },
]);
