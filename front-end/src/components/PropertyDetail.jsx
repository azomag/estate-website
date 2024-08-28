import { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../properties.json";
import { FaLocationDot } from "react-icons/fa6";

export default function PropertyDetail() {
  const { id } = useParams(); // Get the property id from the URL
  const property = propertiesData.find((p) => p.id === parseInt(id)); // Find the property by id

  const [mainImage, setMainImage] = useState(property.image); // State to manage the main image

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="container mx-auto px-10 py-24">
      <img src={mainImage} alt={property.title} className="object-cover rounded-lg w-full lg:h-[80vh] h-[40vh]" />
      <div className="lg:flex lg:flex-row grid grid-cols-2 py-3 gap-5">
      <img src={property.image} onClick={() => handleImageClick(property.image)} alt={property.title} className="object-cover shadow-md hover:scale-105 duration-300  lg:w-[200px] w-[130px] rounded-lg " />

        <img
          src={property.image1}
          onClick={() => handleImageClick(property.image1)}
          className="lg:w-[200px] w-[130px] shadow-md hover:scale-105 duration-300 rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src={property.image2}
          onClick={() => handleImageClick(property.image2)}
          className="lg:w-[200px] w-[130px] shadow-md hover:scale-105 duration-300 rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src={property.image3}
          onClick={() => handleImageClick(property.image3)}
          className="lg:w-[200px] w-[130px] shadow-md hover:scale-105 duration-300 rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src={property.image4}
          onClick={() => handleImageClick(property.image4)}
          className="lg:w-[200px] w-[130px] shadow-md hover:scale-105 duration-300 rounded-xl cursor-pointer"
          alt=""
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <h2 className="text-5xl text-green-700 mt-2">${property.price}</h2>
      <p className="text-gray-600 text-xl flex items-center gap-2 mt-4">
        <FaLocationDot /> {property.info}
      </p>
      <p className="mt-4">{property.description}</p>
      <p className="my-4 text-[15px] text-gray-600">{property.smdescription}</p>
      <div className="flex gap-7 mt-4">
        <img src={property.owner} className="w-12 h-12 rounded-full" alt="Owner" />
        <div className="flex flex-col">
          <h1 className="text-sm text-black">Owner: {property.name}</h1>
          <p className="text-gray-500 text-[14px]">{property.number}</p>
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <a href="/contactowner" className="text-white bg-yellow-600 text-sm hover:bg-yellow-500 hover:text-black duration-300 rounded-2xl py-3 px-20 capitalize">contact the owner</a>
      </div>


      
    </div>
  );
}
