import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import DataProvider from "./context/DataProvider";
import React, { useState } from "react";
import Banner from "./Component/Banner";
import Post from "./Component/Blogs/Post";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState();

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/login"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          /> */}
          <Route path="/post" element={<Post />} />

          {/* <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<Banner />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/all" element={<AllUsers />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/*" element={<NotFound />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
