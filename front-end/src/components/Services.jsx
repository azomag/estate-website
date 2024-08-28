import img2 from "../assets/bgcover.jpg";
import img from "../assets/bg.jpg";
import { FaSearch,  } from "react-icons/fa";
import { GoArrowDown, GoChevronRight  } from "react-icons/go";
import { ImFilesEmpty } from "react-icons/im";
import {  FaLock } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { SiCashapp } from "react-icons/si";
export default function Services() {
  return (
    <div>
      
      <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

<div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
<div className="flex  justify-center items-center uppercase">
  <a href="/" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">HOME <GoChevronRight /></a>
  <a href="#" className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300">Services <GoChevronRight /> </a>
</div>
<h1 className="font-bold text-white drop-shadow-md  lg:text-7xl text-4xl ">
  Services 
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

  {/* section 2  */}
  <div className=" py-10  flex flex-col justify-center capitalize w-full ">
        <div className="flex pb-6 flex-col px-10 gap-8 justify-center  items-center">
          <h2 className="text-yellow-600 text-xl font-semibold ">
            ____ Our Services ____
          </h2>
          <h1 className=" text-black lg:text-5xl text-2xl capitalize  text-center">
            The smartest way to buy a home
          </h1>
        </div>

        <div className="grid lg:grid-cols-4 pt-10 place-items-center grid-cols-1 gap-5 px-10">
          {/* card 1 */}
          <div className="flex border w-[250px] px-5 py-5 gap-6 text-center bg-black/10 shadow duration-300 rounded-3xl flex-col justify-center items-center">
            <span className="text-[100px] text-yellow-600">
              <GiTwoCoins />
            </span>
            <h1 className="font-medium lg:text-xl text-black">
              No Downpayment
            </h1>
            <p className="text-gray-600 capitalize text-[14px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* card 2 */}
          <div className="flex border w-[250px] px-5 py-5 gap-6 text-center bg-black/10 shadow duration-300 rounded-3xl flex-col justify-center items-center">
            <span className="text-[100px] text-yellow-600">
              <SiCashapp />
            </span>
            <h1 className="font-medium lg:text-xl text-black">
              All Cash Offer
            </h1>
            <p className="text-gray-600 capitalize text-[14px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* card 3 */}
          <div className="flex border w-[250px] px-5 py-5 gap-6 text-center bg-black/10 shadow duration-300 rounded-3xl flex-col justify-center items-center">
            <span className="text-[100px] text-yellow-600">
              <ImFilesEmpty />
            </span>
            <h1 className="font-medium lg:text-xl text-black">
              Experts in Your Corner
            </h1>
            <p className="text-gray-600 capitalize text-[14px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* card 1 */}
          <div className="flex border w-[250px] px-5 py-5 gap-6 text-center bg-black/10 shadow duration-300 rounded-3xl flex-col justify-center items-center">
            <span className="text-[100px] text-yellow-600">
              <FaLock />
            </span>
            <h1 className="font-medium lg:text-xl text-black">
              Lokced in Pricing
            </h1>
            <p className="text-gray-600 capitalize text-[14px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>

  <section className="w-full lg:h-screen h-[220vh] mb-10 py-16">
        <div className="flex lg:flex-row  flex-col justify-center items-center">
          <img
            src={img2}
            className="lg:w-[500px] w-[300px] lg:h-[700px]"
            alt=""
          />
          <div className=" w-[400px] lg:w-[700px]  h-[700px]">
            <div className=" py-10  flex flex-col justify-center capitalize w-full ">
              <div className="flex pb-6 flex-col px-10 gap-8 justify-center  items-center">
                <h2 className="text-yellow-600 text-xl font-semibold ">
                  ____ WORK FLOW ____
                </h2>
                <h1 className=" text-black lg:text-5xl text-2xl capitalize  text-center">
                  How it works
                </h1>
              </div>

              {/* work 1 */}
              <div className="grid lg:grid-cols-2 pt-6 gap-5 place-items-center">
                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="w-20 h-20 rounded-full bg-yellow-500 text-white flex justify-center items-center text-4xl">
                    1
                  </span>
                  <h1 className="text-xl">Evaluate Property</h1>
                  <p className="text-sm text-center px-12 text-gray-600">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="w-20 h-20 rounded-full bg-yellow-500 text-white flex justify-center items-center text-4xl">
                    2
                  </span>
                  <h1 className="text-xl">Meet Your Agent</h1>
                  <p className="text-sm text-center px-12 text-gray-600">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="w-20 h-20 rounded-full bg-yellow-500 text-white flex justify-center items-center text-4xl">
                    3
                  </span>
                  <h1 className="text-xl">Close the Deal</h1>
                  <p className="text-sm text-center px-12 text-gray-600">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3">
                  <span className="w-20 h-20 rounded-full bg-yellow-500 text-white flex justify-center items-center text-4xl">
                    4
                  </span>
                  <h1 className="text-xl">Have Your Property</h1>
                  <p className="text-sm text-center px-12 text-gray-600">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      



    </div>
  )
}
