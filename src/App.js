import "./App.css";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Homepage from "./components/Homepage"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Homepage" element={<Homepage  />} />
    </Routes>

    // <h1>Hello world</h1>
  );
}

export default App;
