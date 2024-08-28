import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Agent from './components/Agent';
import Services from './components/Services';
import Blog from './components/Blog';
import OurBlog from './components/OurBlog';
import Properties from './components/Properties';
import PropertyDetail from './components/PropertyDetail';
import Footer from './components/Footer';
import ContactOwner from './components/ContactOwner';
import Login from './components/Login';      // Import Login component
import SignUp from './components/SignUp';    // Import SignUp component
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourblog" element={<OurBlog/>} />
          <Route path="/contactowner" element={<ContactOwner/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />          {/* New route for login */}
          <Route path="/signup" element={<SignUp />} />        {/* New route for sign-up */}
          <Route path="/userprofile" element={<UserProfile/>} />        {/* New route for sign-up */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
