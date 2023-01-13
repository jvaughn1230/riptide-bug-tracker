import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddBug from "./components/AddBug/AddBug";
import ViewBugs from "./components/ViewBugs/ViewBugs";
import Layout from "./components/Layout";

function App() {
  console.log(window.innerWidth);

  return (
    <div className="app">
      <Routes>
        <Route index element={<Login />} />
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
