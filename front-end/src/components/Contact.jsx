import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
export default function Contact() {
  return (
    <div className="w-full pt-40">

      <div className="flex flex-col justify-center gap-3 items-center px-10 ">
        <h1 className="text-black font-medium lg:text-5xl text-4xl  capitalize">get in touch</h1>
        <p className="text-gray-500 text-sm text-center capitalize">feel free to contact us? submit your queries here and will get back to you as soon as possible.</p>
      </div>
      <div className="grid lg:grid-cols-3 py-10 grid-cols-1 gap-5 place-items-center">

      <div className=" py-6 rounded-2xl w-[300px] cursor-pointer hover:text-yellow-500 duration-300  justify-center items-center text-black/70 flex flex-col gap-5">
          <span className="text-7xl animate-bounce"><CiLocationOn /></span>
          <h1 className="font-medium ">Morocco , sala el jadida</h1>
        </div>

        <div className="bg-yellow-500 py-8 shadow-xl cursor-pointer  rounded-2xl w-[300px] justify-center items-center text-white/80 hover:bg-white hover:text-black/60 hover:shadow-none duration-300 flex flex-col gap-5">
          <span className="text-7xl animate-pulse"><FaPhoneAlt /></span>
          <h1 className="font-medium ">+212 777777777</h1>
        </div>


        <div className=" text-black/70  py-6 rounded-2xl cursor-pointer w-[300px] hover:text-yellow-500 duration-300 justify-center items-center  flex flex-col gap-5">
          <span className="text-7xl animate-bounce"><MdMarkEmailUnread /></span>
          <h1 className="font-medium ">azmgmohamed5@gmail.com</h1>
        </div>


      </div>

        <section className="pt-16 flex flex-col justify-center items-center">
        <h1 className="text-black pb-5 font-medium text-4xl  capitalize">send us message</h1>
        <img src="https://img.freepik.com/free-photo/business-customer-service_329181-9143.jpg?t=st=1724683370~exp=1724686970~hmac=7d3f2036f8049e02647c2f22ea09455d0ff993441f5671136fb4e134c3619779&w=900" className="lg:h-[50vh] top-[20px] relative z-[-1] " alt="" />
          <div className=" rounded-2xl flex flex-col justify-center items-center  p-10">
          <div className="py-10  gap-9 grid lg:grid-cols-2 place-items-center grid-cols-1  lg:w-[600px] w-[350px]  justify-center items-center">

            <div className="flex flex-col w-[300px]">
              <label htmlFor="name" className="text-gray-600 pl-1 text-sm font-medium">First Name :</label>
              <input type="name" name="name" id="name" className="py-3 text-sm outline-none px-5 text-black border-yellow-600 border rounded-xl my-2 "  placeholder="enter your name"/>
            </div>
            
            <div className="flex flex-col w-[300px]">
              <label htmlFor="email" className="text-gray-600 pl-1 text-sm font-medium">Email :</label>
              <input type="email" name="email" id="email" className="py-3 text-sm outline-none px-5 text-black border border-yellow-600 rounded-xl my-2 "  placeholder="enter your email"/>
            </div>

            <div className="flex flex-col  w-[300px]">
              <label htmlFor="number" className="text-gray-600 pl-1 text-sm font-medium">Phone Number :</label>
              <input type="text" name="num" id="num" className="py-3 text-sm outline-none px-5 border border-yellow-600 rounded-xl my-2 "  placeholder="enter your Phone Number"/>
            </div>

            </div>

            <div className="flex flex-col lg:w-[500px] w-[300px] ">
              <label htmlFor="number" className="text-gray-600 pl-1 text-sm font-medium">Description :</label>
              <textarea type="message" rows="4" required name="num" id="num" className="py-3 text-sm outline-none px-5 border border-yellow-600 rounded-xl my-2 "  placeholder="Write Your Message ...."/>
            </div>

            <div className="py-5 ">
              <button className="text-[12px] px-16 py-2 bg-yellow-600 hover:bg-yellow-400 hover:text-black duration-300 rounded-xl text-white">Send</button>
            </div>
            </div>
        </section>
    </div>
  )
}
