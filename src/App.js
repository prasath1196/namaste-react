import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useEffect } from "react";
import UserContext from "./utils/userContext";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userData = { userName: "Prasath" };

    setUserName(userData.userName);
  }, []);
  return (
    <div className='app'>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense
            fallback={
              <div>
                <h1>Loading..</h1>
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
