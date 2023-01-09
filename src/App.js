import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.log(window.innerWidth);

  return (
    <div className="app">
      {/* <Signup /> */}
      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
