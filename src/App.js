import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import User from "./pages/admin/User";
import Login from "./pages/public/Login";
import Error from "./_utils/Error";
import "./styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/profile" element={<User />}></Route>
        <Route path="*/" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
