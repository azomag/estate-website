import { FaSearch,  } from "react-icons/fa";
import { GoArrowDown, GoChevronRight  } from "react-icons/go";
import img from "../assets/bg.jpg";
import img3 from "../assets/bg2.jpg";


export default function About() {
  return (
    <div>
    
            <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

      <div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
        <div className="flex  justify-center items-center uppercase">
          <a href="/" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">HOME <GoChevronRight /></a>
          <a href="#" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">about us <GoChevronRight /> </a>
        </div>
        <h1 className="font-bold text-white drop-shadow-md  lg:text-7xl text-4xl ">
          About US 
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
            <div className="capitalize w-[240px] ">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" duration-300 rounded-3xl shadow-lg" alt="" />
            <div className="bg-white relative left- bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">mohamed</h1>
              <span className="flex text-sm text-gray-500">Listing _ <p className="text-black/90">10 Properties</p></span>
            </div>
            </div>

            <div className="capitalize w-[240px] ">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" rounded-3xl shadow-lg" alt="" />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">houssam</h1>
              <span className="flex text-sm text-gray-500">Listing _ <p className="text-black/90">10 Properties</p></span>
            </div>
            </div>


            <div className="capitalize w-[240px] ">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" rounded-3xl shadow-lg" alt="" />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">oumaima</h1>
              <span className="flex text-sm text-gray-500">Listing _ <p className="text-black/90">10 Properties</p></span>
            </div>
            </div>


            <div className="capitalize w-[240px] ">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" rounded-3xl shadow-lg" alt="" />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">hiba</h1>
              <span className="flex text-sm text-gray-500">Listing _ <p className="text-black/90">10 Properties</p></span>
            </div>
            </div>

          </div>

      </section>
      

      <section className="w-full py-16">
        <div className="flex lg:flex-row flex-col justify-start items-center">
          <div className="flex justify-center lg:px-20 items-center">
            <img
              src={img3}
              className="lg:w-[700px] w-[300px] h-[300px] shadow-md lg:h-[70vh] "
              alt=""
            />
          </div>
          <div className="bg-white lg:absolute lg:right-20 lg:z-[40] lg:w-[700px]  lg:shadow-lg  lg:h-[60vh]">
            <h1 className="text-4xl flex justify-center pt-10">
              We Put People First.
            </h1>
            <p className="text-gray-500 px-10 py-6">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="text-gray-500 px-10">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word and and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didnt take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 py-10 grid-cols-1 gap-6 px-10 lg:place-items-center place-items-start ">
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">320</h1>
            <p className="text-gray-500 text-sm">Area <br /> Population</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">1,090</h1>
            <p className="text-gray-500 text-sm">Total <br /> Properties</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">290</h1>
            <p className="text-gray-500 text-sm">Average <br /> House</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">67</h1>
            <p className="text-gray-500 text-sm">Total <br /> Branches</p>
          </div>
        </div>
      </section>

    </div>
  );
}
