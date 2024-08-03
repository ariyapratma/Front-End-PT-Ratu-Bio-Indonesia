import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom-yellow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1>Welcome to the App</h1>
                <a href="/login" className="text-blue-500">
                  Login
                </a>{" "}
                |
                <a href="/register" className="text-blue-500 ml-2">
                  Register
                </a>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
