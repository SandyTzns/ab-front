import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignInContent from "./pages/SignInContent";
import User from "./pages/User";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignInContent />}></Route>
        <Route path="/signIn/user" element={<User />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
