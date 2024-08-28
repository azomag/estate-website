import { useState,useRef } from "react";
import propertiesData from "../properties.json";
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowDown, GoChevronRight, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img from "../assets/bg.jpg";
import { FaSearch } from "react-icons/fa";

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [searchFeedback, setSearchFeedback] = useState("");
  const cardSectionRef = useRef(null); // Reference to the property card section

  const handleSearch = () => {
    const results = propertiesData.filter((property) =>
      property.info.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(results);

    if (results.length > 0) {
      setSearchFeedback(`${results.length} properties found in "${searchTerm}"`);
      cardSectionRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the cards section
    } else {
      setSearchFeedback(`No properties found for "${searchTerm}"`);
    }
  };

  return (
    <div>
      <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />
      <div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
        <div className="flex justify-center items-center uppercase">
          <Link to="/" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">
            HOME <GoChevronRight />
          </Link>
          <Link to="/properties" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">
            Properties <GoChevronRight />
          </Link>
        </div>
        <h1 className="font-bold text-white drop-shadow-md lg:text-7xl text-4xl">Properties</h1>
        <p className="font-light text-gray-300 drop-shadow-md">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts
        </p>
        <div className="flex mx-auto justify-center items-center">
          <input
            type="search"
            className="py-4 lg:w-[500px] w-[300px] rounded-full text-black px-6 border-2 outline-none border-yellow-500"
            pattern="[A-Za-z\s]*"
            placeholder="Search Location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="relative right-[55px] bg-yellow-600 py-4 px-4 rounded-full text-white"
          >
            <FaSearch />
          </button>
        </div>
        
      </div>
      <a href="#about" className="relative transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-600 rounded-full flex justify-center items-center text-xl text-white cursor-pointer">
        <GoArrowDown className="animate-bounce" />
      </a>
      <section ref={cardSectionRef} className="py-10 flex flex-col justify-center capitalize w-full">
        <div className="flex flex-col px-10 gap-8 justify-center items-center">
          <h2 className="text-yellow-600 text-xl font-semibold">
            ____ WHAT WE OFFER ____
          </h2>
          <h1 className="text-black lg:text-5xl text-2xl capitalize text-center">
            Exclusive Offer For You
          </h1>
          {searchFeedback && (
          <p className="mt-4 text-lg text-black">{searchFeedback}</p>
        )}
        </div>
        <div id="about" className="grid lg:grid-cols-3 pt-10 grid-cols-1 gap-8 place-items-center">
          {filteredProperties.map((properties) => (
            <div key={properties.id} className="flex flex-col border pb-4 bg-gray-100 rounded-2xl justify-center gap-3 items-center">
              <img src={properties.image} className="w-[350px] p-2 object-cover rounded-2xl" alt={properties.title} />
              <h1 className="text-black text-[18px] font-semibold">{properties.title}</h1>
              <div className="flex gap-8 justify-center items-center">
                <h1 className="text-[30px] text-green-900">${properties.price}</h1>
                <p className="text-[20px] text-gray-600">{properties.trait}</p>
              </div>
              <p className="text-gray-600 flex justify-center items-center gap-3 capitalize text-[14px]">
                <FaLocationDot /> {properties.info}
              </p>
              <span className="text-sm">{properties.description}</span>
              <div className="flex gap-7 pt-3">
                <img src={properties.owner} className="w-12 h-12 rounded-full" alt="" />
                <div className="flex flex-col pb-3">
                  <h1 className="text-sm text-black">Owner: {properties.name}</h1>
                  <p className="text-gray-500 text-[14px]">{properties.number}</p>
                </div>
              </div>
              <Link to={`/properties/${properties.id}`} className="flex justify-center mt-4 text-white items-center bg-yellow-600 py-2 px-10 rounded-2xl shadow hover:text-black duration-300 gap-6">
                details <GoArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
