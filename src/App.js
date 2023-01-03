import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  console.log(window.innerWidth);

  return (
    <div className="app">
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
