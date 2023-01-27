import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddBug from "./components/AddBug/AddBug";
import ViewBugs from "./components/ViewBugs/ViewBugs";
import Layout from "./components/Layout";

import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => state);
  // TODO: Need to create a auth check to render loggedin vs home screen

  console.log("width:" + window.innerWidth);
  console.log("height:" + window.innerHeight);

  // auth.loggedIn ? </account> : <Login />

  return (
    <div className="app">
      <Routes>
        <Route index element={!auth.loggedIn ? <Login /> : <Layout></Layout>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Layout />}>
          <Route path="/account/viewbugs" element={<ViewBugs />} />
          <Route path="/account/addbug" element={<AddBug />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
