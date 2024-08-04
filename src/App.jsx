import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-custom-yellow">
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-custom-yellow">
              <Register />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
              <Home />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-custom-yellow text-center">
              <h1>Welcome to the PT Ratu Bio Indonesia</h1>
              <a href="/login" className="text-blue-500">
                Login
              </a>{" "}
              |
              <a href="/register" className="text-blue-500 ml-2">
                Register
              </a>{" "}
              |
              <a href="/home" className="text-blue-500 ml-2">
                Home
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
