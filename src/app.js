import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>...Loading</div>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading....</div>}><Grocery/></Suspense>
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu></RestaurentMenu>
      }
    ],
    errorElement:  <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
