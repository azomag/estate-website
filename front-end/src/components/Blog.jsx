import { FaSearch,  } from "react-icons/fa";
import { GoArrowDown, GoChevronRight  } from "react-icons/go";
import { MdInsertComment } from "react-icons/md";
import img from "../assets/bg.jpg";
import blogData from '../blogs.json';
export default function Blog() {
  return (
    <div>
    
            <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

      <div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
        <div className="flex  justify-center items-center uppercase">
          <a href="/" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">HOME <GoChevronRight /></a>
          <a href="#" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">Blog <GoChevronRight /> </a>
        </div>
        <h1 className="font-bold text-white drop-shadow-md  lg:text-7xl text-4xl ">
        Our Blog 
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

    <section className="w-full py-10">
      <div className="grid lg:grid-cols-4 grid-cols-1 place-items-center gap-8">


        {
          blogData.map((blog) =>{
            return(
              <div key={blog} className="flex flex-col w-[280px]  gap-2">
                <div className="">
                  <a href="/ourblog">
                  <img src={blog.image} alt="" />
                  </a>
                </div>
                <h1 className="text-gray-600 cursor-pointer hover:text-yellow-600 duration-300">{blog.title}</h1>
                <div className="flex gap-2 text-sm text-gray-500">
                  <a href="/ourblog" className=" hover:text-yellow-600 duration-300">{blog.date}</a>
                  <a href="/ourblog" className="capitalize hover:text-yellow-600 duration-300">{blog.name}</a>
                  <a href="/ourblog" className="flex hover:text-yellow-600 duration-300 justify-center gap-2 items-center"><MdInsertComment />3</a>
                </div>
              </div>


            )
          })
        }
      </div>
    </section>
      


    </div>
  )
}
