import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/AboutWebsite/Aboutus";
import Website from "./components/Basics/Website";
import Blog from "./components/BlogsWebsite/Blog";
import Booking from "./components/Booking/Booking";
import Contact from "./components/ContactWebsite/Contact";
import Error from "./components/ErrorWebsite/Error";
import Faq from "./components/FaqsWebsite/Faq";
import Forgett from "./components/LoginWebsite/Forgett";
import Login from "./components/LoginWebsite/Login";
import Register from "./components/LoginWebsite/Register";
import Ourteam from "./components/OurTeamWebsite/Ourteam";
import Search from "./components/search/Search";
import ServicesWeb from "./components/ServicesWebsite.jsx/ServicesWeb";
import './index.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/error404" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forgett />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<ServicesWeb />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
