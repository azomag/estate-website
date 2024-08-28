import { FaSearch,  } from "react-icons/fa";
import { GoArrowDown, GoChevronRight  } from "react-icons/go";
import img from "../assets/bg.jpg";
import agent from '../agent.json';
export default function Agent() {
  return (
    <div>
    
    <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

<div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
<div className="flex  justify-center items-center uppercase">
  <a href="/" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">HOME <GoChevronRight /></a>
  <a href="#" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">agent <GoChevronRight /> </a>
</div>
<h1 className="font-bold text-white drop-shadow-md  lg:text-7xl text-4xl ">
  Agent 
</h1>
<p className="font-light text-gray-300 drop-shadow-md ">
  A small river named Duden flows by their place and supplies it with
  the necessary regelialia. It is a paradisematic country, in which
  roasted parts
</p>
<div className="flex mx-auto justify-center items-center">
  <input
    type="search"
    className="py-4 lg:w-[500px] w-[300px] rounded-full text-black px-6 border-2 outline-none  border-yellow-500"
    pattern="[A-Za-z\s]*"
    placeholder="Search Location"
  />
  <a
    href="/properties"
    className="relative right-[55px]  bg-yellow-600 py-4  px-4 rounded-full text-white"
  >
    <FaSearch />
  </a>
</div>
</div>
<div className="relative transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-20 h-20 bg-yellow-600 rounded-full flex justify-center items-center text-xl text-white cursor-pointer">
<GoArrowDown className="animate-bounce" />
</div>

<section className="w-full ">
<div className="flex pb-6 flex-col px-10 gap-8 justify-center  items-center">
  <h2 className="text-yellow-600 text-xl font-semibold ">
    ____ AGENTS ____
  </h2>
  <h1 className=" text-black lg:text-5xl text-2xl capitalize  text-center">
  Our Agents
  </h1>
</div>

<div className="grid py-10 lg:grid-cols-4 grid-cols-1 gap-4 place-items-center">
{
  agent.map((agent) =>{
  return(
  
    <div key={agent.id} className="capitalize w-[240px] ">
      <img src={agent.image} className=" duration-300 rounded-3xl shadow-lg" alt="" />
    <div className="bg-white relative left- bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
      <h1 className="text-md font-normal text-black text-2xl">{agent.name}</h1>
      <span className="flex text-sm text-gray-500">Listing _ <p className="text-black/90">10 Properties</p></span>
      <p className="text-sm text-gray-600">{agent.number}</p>
    </div>
    </div>
);
})}

    </div>

  

</section>




</div>
  )
}
