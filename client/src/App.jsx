import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./screens/Users";

function App() {
  return (
    <div className="w-full min-h-[100vh] overflow-y-scroll bg-zinc-300 text-zinc-800">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
