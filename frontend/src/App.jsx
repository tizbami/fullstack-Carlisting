import TeamList from "../team/TeamList";
import BButton from "./shared/BButton"
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Listing from "./components/listing/Listing";
import Blog from "./components/blog/Blog";
import AddCar from "./components/addcar/AddCar";
import PageNotFound from "./components/notfound/PageNotFound";
import AllCars from "./components/all-cars/AllCars";
import Navigationbar from "./components/header/Navigationbar";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import CarDetails from "./components/listing/CarDetails";

const App = () => {
  return (
    <>
      {/* header section */}
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing" element={<AllCars />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-cars" element={<Listing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App