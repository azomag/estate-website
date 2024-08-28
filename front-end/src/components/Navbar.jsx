import { useState, useEffect } from 'react';
import img from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserName(loggedInUser.name);
      setProfilePic(loggedInUser.profilePic);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white">
      {/* PC devices navbar */}
      <nav className="justify-between w-full  bg-white shadow z-[999] fixed items-center px-10 lg:flex hidden">
        <div className="w-[150px] object-cover">
          <a href="/">
            <img src={img} alt="Logo" />
          </a>
        </div>
        <div>
          <ul className="flex gap-6 font-[500] capitalize text-[15px] text-gray-500">
            <li>
              <Link to="/" className="hover:text-yellow-600 duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 duration-300">About</Link>
            </li>
            <li>
              <Link to="/agent" className="hover:text-yellow-600 duration-300">Agent</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-600 duration-300">Services</Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-yellow-600 duration-300">Properties</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-600 duration-300">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 duration-300">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <div className="relative flex items-center gap-4">
              <div className="group relative">
                <span className="text-gray-700 text-sm capitalize flex justify-center items-center gap-2 cursor-pointer">{userName} <MdOutlineArrowDropDown className='text-2xl'/></span>
                <div className="absolute right-0 mt-4 w-[150px] py-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className='flex py-3 gap-2  border-b border-gray-300 mx-5 flex-col justify-center items-center'>
                  <img src={profilePic} alt="Profile" className="w-9 h-9 border-[1px] border-green-500 rounded-full" />
                <span className="text-gray-700  text-sm capitalize  gap-2 cursor-pointer">@{userName} </span>
                    
                  </div>
                  <Link to="/userprofile" className="flex pt-5 justify-center items-center gap-5   px-4 py-2 text-sm hover:ml-4 duration-300 text-gray-700 hover:text-yellow-600">Profile <FaUserEdit className='bg-yellow-500 text-white rounded-2xl text-2xl p-1' /></Link>
                  <button onClick={handleLogout} className="flex items-center gap-5 text-sm hover:ml-4 py-2 duration-300 justify-center hover:text-red-600 w-full text-left  text-gray-700">
                    Logout <IoIosLogOut className='bg-red-500 text-white rounded-2xl text-2xl p-1'/>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="py-2 hover:bg-yellow-600 duration-300 text-[15px] hover:text-white capitalize text-gray-700 px-4 border rounded-xl border-yellow-600">Login</Link>
              <Link to="/signup" className="py-2 bg-yellow-600 duration-300 text-[15px] text-white capitalize hover:bg-white hover:text-gray-700 px-4 border rounded-xl border-yellow-600">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile devices navbar */}
      <nav className="lg:hidden fixed flex flex-col w-full z-[999]">
        <div className="flex justify-between items-center p-2 bg-white">
          <div className="w-[150px] cursor-not-allowed object-cover">
            <img src={img} alt="Logo" />
          </div>
          <div onClick={toggleMenu} className="text-black text-3xl z-[999] px-6 cursor-pointer">
            {isMenuOpen ? <IoIosClose /> : <FiMenu />}
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-[100%] z-[99] w-[100%] bg-yellow-500 flex flex-col transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <div className="w-full flex justify-center items-center pt-5">
            <img src={img} alt="Logo" className="w-[180px]" />
          </div>
          <ul className="flex flex-col gap-6 justify-center items-center uppercase text-[20px] text-black pt-10">
            <li onClick={toggleMenu}>
              <Link to="/" className="hover:text-gray-200 hover:pl-7 duration-300">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about" className="hover:text-gray-200 hover:pl-7 duration-300">About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/agent" className="hover:text-gray-200 hover:pl-7 duration-300">Agent</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/services" className="hover:text-gray-200 hover:pl-7 duration-300">Services</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/properties" className="hover:text-gray-200 hover:pl-7 duration-300">Properties</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/blog" className="hover:text-gray-200 hover:pl-7 duration-300">Blog</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contact" className="hover:text-gray-200 hover:pl-7 duration-300">Contact</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li onClick={toggleMenu}>
                  <Link to="/profile" className="hover:text-yellow-600 bg-white py-2 px-6 rounded-xl  hover:pl-7 duration-300">Profile</Link>
                </li>
                <li onClick={handleLogout} className="hover:text-gray-900 flex gap-3 justify-center items-center cursor-pointer bg-red-600 text-white py-2 px-6 rounded-xl  duration-300">
                  Logout <IoIosLogOut className='text-2xl'/>
                </li>
              </>
            ) : (
              <>
                <li onClick={toggleMenu}>
                  <Link to="/login" className="hover:text-gray-200 hover:pl-7 duration-300">Login</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/signup" className="hover:text-gray-200 hover:pl-7 duration-300">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
