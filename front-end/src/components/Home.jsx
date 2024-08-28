import img from "../assets/bg.jpg";
import { FaSearch, FaLock } from "react-icons/fa";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { SiCashapp } from "react-icons/si";
import { ImFilesEmpty } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import homeData from "../homeData.json";
import img2 from "../assets/bgcover.jpg";
import img3 from "../assets/bg2.jpg";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden ">
      <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

      <div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
        <h1 className="font-bold text-white drop-shadow-md  lg:text-7xl text-4xl ">
          The Simplest Way to Find Property
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

        <div className="grid lg:grid-cols-4 pt-10 place-items-center grid-cols-1 gap-10 px-10">
          {/* card 1 */}
          <div className="flex border w-[250px] px-5 py-7 gap-6 text-center bg-gray-100 shadow duration-300 rounded-3xl flex-col justify-center items-center">
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
          <div className="flex border w-[250px] px-5 py-7 gap-6 text-center bg-gray-100 shadow duration-300 rounded-3xl flex-col justify-center items-center">
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
          <div className="flex border w-[250px] px-5 py-7 gap-6 text-center bg-gray-100 shadow duration-300 rounded-3xl flex-col justify-center items-center">
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
          <div className="flex border w-[250px] px-5 py-7 gap-6 text-center bg-gray-100 shadow duration-300 rounded-3xl flex-col justify-center items-center">
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

      {/* section 3 */}
      <section className=" py-10 flex flex-col justify-center capitalize w-full ">
        <div className="flex flex-col px-10 gap-8 justify-center  items-center">
          <h2 className="text-yellow-600 text-xl font-semibold ">
            ____ WHAT WE OFFER ____
          </h2>
          <h1 className=" text-black lg:text-5xl text-2xl capitalize  text-center">
            Exclusive Offer For You
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 pt-10 grid-cols-1 gap-8 place-items-center">
          {homeData.map((home) => {
            return (
              <div
                key={home.id}
                className="flex flex-col border pb-4 bg-gray-100 rounded-2xl justify-center gap-3 items-center"
              >
                <img
                  src={home.image}
                  className="w-[350px] p-2 object-cover hover: rounded-2xl"
                  alt={home.title}
                />
                <h1 className="text-black  text-[18px] font-semibold">
                  {home.title}
                </h1>
                <div className="flex gap-8 justify-center items-center">
                  <h1 className="text-[30px] text-green-900">${home.price}</h1>
                  <p className="text-[20px] text-gray-600 ">${home.trait}</p>
                </div>
                <p className="text-gray-600 flex justify-center items-center gap-3 capitalize text-[14px]">
                  <FaLocationDot />
                  {home.info}
                </p>
                <span className="text-sm">{home.description}</span>
                <div className="flex gap-7 pt-3">
                  <img
                    src={home.owner}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <div className=" flex flex-col pb-3">
                    <h1 className="text-sm text-black">Owner : {home.name}</h1>
                    <p className="text-gray-500 text-[14px]">{home.number}</p>
                  </div>
                </div>
                <a
                  href="/properties"
                  className="flex justify-center mt-4 text-white items-center bg-yellow-600 py-2 px-10 rounded-xl text-sm shadow hover:text-black duration-300 gap-6"
                >
                  details <GoArrowRight />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* section 4 */}

      <section className="w-full lg:h-screen h-[220vh] py-16">
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

      <section className="w-full py-16 md:mt-20">
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
            <p className="text-gray-500 text-sm">
              Area <br /> Population
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">1,090</h1>
            <p className="text-gray-500 text-sm">
              Total <br /> Properties
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">290</h1>
            <p className="text-gray-500 text-sm">
              Average <br /> House
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl text-yellow-600">67</h1>
            <p className="text-gray-500 text-sm">
              Total <br /> Branches
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-10">
        <div className="flex pb-6 flex-col px-10 gap-8 justify-center  items-center">
          <h2 className="text-yellow-600 text-xl font-semibold ">
            ____ AGENTS ____
          </h2>
          <h1 className=" text-black lg:text-5xl text-2xl capitalize  text-center">
            Our Agents
          </h1>
        </div>
        <div className="grid py-10 lg:grid-cols-4 grid-cols-1 gap-4 place-items-center">
          <div className="capitalize w-[250px] ">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" duration-300 rounded-3xl shadow-lg"
              alt=""
            />
            <div className="bg-white relative left- bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">
                mohamed
              </h1>
              <span className="flex text-sm text-gray-500">
                Listing _ <p className="text-black/90">10 Properties</p>
              </span>
            </div>
          </div>

          <div className="capitalize w-[250px] ">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" rounded-3xl shadow-lg"
              alt=""
            />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">
                houssam
              </h1>
              <span className="flex text-sm text-gray-500">
                Listing _ <p className="text-black/90">10 Properties</p>
              </span>
            </div>
          </div>

          <div className="capitalize w-[250px] ">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" rounded-3xl shadow-lg"
              alt=""
            />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">
                oumaima
              </h1>
              <span className="flex text-sm text-gray-500">
                Listing _ <p className="text-black/90">10 Properties</p>
              </span>
            </div>
          </div>

          <div className="capitalize w-[250px] ">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" rounded-3xl shadow-lg"
              alt=""
            />
            <div className="bg-white relative  bottom-40 shadow-lg gap-2  duration-300 flex justify-center items-center flex-col h-[15vh] rounded-r-3xl  z-[10] w-[200px]">
              <h1 className="text-md font-normal text-black text-2xl">hiba</h1>
              <span className="flex text-sm text-gray-500">
                Listing _ <p className="text-black/90">10 Properties</p>
              </span>
            </div>
          </div>
        </div>

        <section className="w-full py-16">
          <div className="flex flex-col lg:mx-20 justify-center items-center px-10 bg-gray-200 rounded-lg py-20">
            <div className="lg:w-[900px]  flex flex-col justify-start items-start">
              <h1 className="lg:text-6xl text-2xl font-serif ">
                Grow your real estate business and brand with Magi Estate
              </h1>
              <p className="text-[14px] text-gray-600 py-6">
                Join the fastest-growing digital platform for real estate agents
                and teams.
              </p>
              <a
                href="/signup"
                className="py-4 w-[150px] flex justify-center items-center bg-yellow-600 uppercase text-white text-[12px]"
              >
                get started now
              </a>
            </div>
            <div className="border-t flex border-gray-500 lg:w-[900px] mt-10">
              <div className="flex lg:flex-row flex-col gap-3 pt-5">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-500 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-500 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-500 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-500 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-500 me-1 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.7/5 based
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    on
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    2,086 reviews
                  </p>
                </div>
                <div className="pl-5">
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <img
                      className="w-10 h-10 border-2 border-white rounded-full "
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 border-2 border-white rounded-full "
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 border-2 border-white rounded-full "
                      src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-yellow-600 border-2 border-white rounded-full hover:bg-black duration-300 "
                      href="#"
                    >
                      +99
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
