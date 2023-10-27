import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
