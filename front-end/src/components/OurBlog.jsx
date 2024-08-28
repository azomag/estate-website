import { FaSearch } from "react-icons/fa";
import { GoArrowDown, GoChevronRight } from "react-icons/go";
import img from "../assets/bg.jpg";
import { MdInsertComment } from "react-icons/md";
export default function OurBlog() {
  return (
    <div className="overflow-x-hidden">
      <img src={img} className="object-cover z-[9] w-full h-[110vh]" alt="" />

      <div className="lg:w-[700px] px-10 w-[400px] gap-4 text-white text-center z-10 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center items-center">
        <div className="flex  justify-center items-center uppercase">
          <a
            href="/"
            className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300"
          >
            HOME <GoChevronRight />
          </a>
          <a
            href="#"
            className="flex gap-1 items-center text-gray-500 text-[15px] hover:text-yellow-600 duration-300"
          >
            Blog <GoChevronRight />{" "}
          </a>
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

      <section className="flex  lg:flex-row py-10 flex-col gap-5 justify-center">
        <aside className="lg:w-[400px] lg:p-0 px-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl py-4 text-gray-900 font-medium">Categories</h1>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Jobs
            </p>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Visual Assistant
            </p>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Coffee
            </p>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Drinks
            </p>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Foods
            </p>
            <p className="text-gray-700 py-2 px-3 rounded-sm bg-black/10">
              Travel
            </p>
          </div>
          <div className="lg:pt-20 ">
            <h1 className="text-xl  py-7 text-gray-900 font-medium">
              Recent Blog
            </h1>
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl h-[120px]"
                alt=""
              />
              <div className="px-5">
                <h1 className="text-gray-600 cursor-pointer hover:text-yellow-600 duration-300">
                  Understanding the Real Estate Market: Tips for First-Time
                  Buyers
                </h1>
                <div className="flex gap-2 pt-5 text-sm text-gray-500">
                  <a
                    href="/ourblog"
                    className=" hover:text-yellow-600 duration-300"
                  >
                    2024-08-20
                  </a>
                  <a
                    href="/ourblog"
                    className="capitalize hover:text-yellow-600 duration-300"
                  >
                    admin
                  </a>
                  <a
                    href="/ourblog"
                    className="flex hover:text-yellow-600 duration-300 justify-center gap-2 items-center"
                  >
                    <MdInsertComment />3
                  </a>
                </div>
              </div>
            </div>

            <div className="flex pt-5">
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl h-[120px]"
                alt=""
              />
              <div className="px-5">
                <h1 className="text-gray-600 cursor-pointer hover:text-yellow-600 duration-300">
                  How to Stage Your Home for a Quick Sale
                </h1>
                <div className="flex gap-2 pt-5 text-sm text-gray-500">
                  <a
                    href="/ourblog"
                    className=" hover:text-yellow-600 duration-300"
                  >
                    2024-08-22
                  </a>
                  <a
                    href="/ourblog"
                    className="capitalize hover:text-yellow-600 duration-300"
                  >
                    admin
                  </a>
                  <a
                    href="/ourblog"
                    className="flex hover:text-yellow-600 duration-300 justify-center gap-2 items-center"
                  >
                    <MdInsertComment />3
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-5">
            <img
              src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-xl h-[120px]"
              alt=""
            />
            <div className="px-5">
              <h1 className="text-gray-600 cursor-pointer hover:text-yellow-600 duration-300">
                Top 10 Neighborhoods for Real Estate Investment in 2024
              </h1>
              <div className="flex gap-2 pt-5 text-sm text-gray-500">
                <a
                  href="/ourblog"
                  className=" hover:text-yellow-600 duration-300"
                >
                  2024-08-26
                </a>
                <a
                  href="/ourblog"
                  className="capitalize hover:text-yellow-600 duration-300"
                >
                  admin
                </a>
                <a
                  href="/ourblog"
                  className="flex hover:text-yellow-600 duration-300 justify-center gap-2 items-center"
                >
                  <MdInsertComment />3
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:pt-20">
            <h1 className="font-medium pt-10 text-xl capitalize">Tag Cloud</h1>
            <div className="flex gap-3 ">
              <p className="text-gray-500 uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #estate
              </p>
              <p className="text-gray-500 uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #menu
              </p>
              <p className="text-gray-500 uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #food
              </p>
              <p className="text-gray-500 uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #sweet
              </p>

              <p className="text-gray-500 uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #tasty
              </p>
              <p className="text-gray-500 lg:flex hidden uppercase text-[12px] pt-2 hover:text-yellow-600 duration-300 cursor-pointer">
                #delicious
              </p>
            </div>
          </div>
        </aside>

        <div className=" px-10 lg:w-[900px]">
          <h1 className="lg:text-4xl py-5 text-xl  text-gray-800">
            It is a long established fact a reader be distracted
          </h1>
          <p className="text-md pb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>
          <img src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className="text-md pt-5 pb-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>

          <h1 className="lg:text-4xl py-5 text-xl  text-gray-800">#2. Creative WordPress Themes</h1>
          <p className="text-md pt-5 pb-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>

          <img src="https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className="text-md pt-5 pb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>
          <p className="text-md pt-5 pb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>
          <p className="text-md pt-5 pb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>
          <p className="text-md pt-5 pb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque assumenda? Quibusdam dicta aliquam tempora sint
            illum, itaque repudiandae. Atque architecto dicta quia assumenda
            dolore, voluptates accusamus incidunt reprehenderit ab minima iusto
            placeat, temporibus doloribus cumque nemo neque delectus excepturi
            ipsa laborum voluptate ipsum? Voluptatum voluptates eum libero
            aperiam esse.
          </p>


          <section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
      <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
        Comments
      </h2>
      <div className="w-full flex-col justify-start items-start gap-8 flex">
        <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
          <div className="w-full flex-col justify-start items-start gap-3.5 flex">
            <div className="w-full justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="rounded-full"
                    src="https://pagedone.io/asset/uploads/1710225753.png"
                    alt="John smith image"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                    John smith
                  </h5>
                  <h6 className="text-gray-500 text-xs font-normal leading-5">
                    5 Day ago
                  </h6>
                </div>
              </div>
              <div className="group justify-end items-center flex">
                <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-yellow-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <a href="" className="">
                    <svg
                      className="group-hover:text-yellow-600 text-gray-400 group-hover:fill-yellow-600 fill-white transition-all duration-700 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                        stroke="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="px-2 justify-center items-center flex">
                    <h5 className="group-hover:text-yellow-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      34
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-sm font-normal leading-snug">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, nobis minus debitis quos aperiam suscipit provident hic ad sed fugiat! Iure maxime possimus animi, quasi vero quos dolore excepturi voluptatum beatae hic illum facere quam!
            </p>
          </div>
        </div>
        <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-full flex-col justify-start items-start gap-3.5 flex">
            <div className="w-full justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://pagedone.io/asset/uploads/1710238051.png"
                    alt="Emma Davis image"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                    Hiba
                  </h5>
                  <h6 className="text-gray-500 text-xs font-normal leading-5">
                    4 Day ago
                  </h6>
                </div>
              </div>
              <div className="group justify-end items-center flex">
                <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-yellow-600 transition-all duration-700 ease-in-out  justify-center items-center flex">
                  <a href="" className="">
                    <svg
                      className="group-hover:text-yellow-600 text-gray-400 group-hover:fill-yellow-600 fill-white transition-all duration-700 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                        stroke="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="px-2 justify-center items-center flex">
                    <h6 className="group-hover:text-yellow-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      30
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-sm font-normal leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique omnis aspernatur fuga modi rem placeat unde, velit esse reiciendis quia iste minima ullam commodi aliquid nemo autem amet dolorem. Obcaecati illo quam sit alias.
            </p>
          </div>
        </div>
        <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-end gap-2.5 flex">
          <div className="w-full flex-col justify-start items-end gap-3.5 flex">
            <div className="w-full justify-between items-center inline-flex">
              <div className="w-full justify-start items-center gap-2.5 flex">
                <div className="w-10 h-10 bg-slate-400 rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://pagedone.io/asset/uploads/1710237485.png"
                    alt="Danial Harrison image"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                    Ahmed
                  </h5>
                  <h6 className="text-gray-500 text-xs font-normal leading-5">
                    5 Hour ago
                  </h6>
                </div>
              </div>
              <div className="group justify-end items-center flex">
                <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-yellow-600 transition-all duration-700 ease-in-out  justify-center items-center flex">
                  <a href="" className="">
                    <svg
                      className="group-hover:text-yellow-600 text-gray-400 group-hover:fill-yellow-600 fill-white transition-all duration-700 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                        stroke="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="px-2 justify-center items-center flex">
                    <h6 className="group-hover:text-yellow-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      80
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-sm font-normal leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut aliquid distinctio optio quae commodi provident impedit sunt adipisci expedita vitae illo unde, minus minima sed, ex deserunt harum laboriosam quos, culpa eligendi ratione doloremque.
            </p>
            <div className="w-full justify-end items-start gap-6 inline-flex">
              <button className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-red-500 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-200 justify-center items-center flex">
                <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                  Delete
                </span>
              </button>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-yellow-600 hover:bg-yellow-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Edit
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative flex justify-between gap-2">
          <input
            type="text"
            className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
            placeholder="Leave a constructive comment..."
          />
          <a href="" className="absolute right-6 top-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_2063_2504)">
                <path
                  d="M10.0194 1.66699V5.6556C1.69526 5.6556 1.54178 14.4163 1.69573 18.3337C1.69573 16.4818 5.84659 10.0003 10.0194 10.6414V14.63L18.3332 8.14847L10.0194 1.66699Z"
                  stroke="#111827"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2063_2504">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>


        


        
      </section>
    </div>
  );
}
