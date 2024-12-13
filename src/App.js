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
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/cart";
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userData = { userName: "Prasath" };

    setUserName(userData.userName);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
