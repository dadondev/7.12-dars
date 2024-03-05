import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-full">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
};

export default App;
