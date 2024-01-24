import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/16/solid"


const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
    <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
      <div className="flex items-center space-x-6">
         <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
        <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black "/>
        </div>
       <div>
        <h1 className="text-[25px] mb-[0.2rem] text-[white]">Address</h1>
        <p className="text-[17px] w-[90%] text-white opacity-60">Berlin Deutschland </p>
      </div></div>
      <div className="flex items-center space-x-6">
         <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
        <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black "/>
        </div>
       <div>
        <h1 className="text-[25px] mb-[0.2rem] text-[white]">Phone</h1>
        <a href="tel:+17632798189">
        <p className="text-[17px] w-[100%] text-white opacity-60">+176 49 32798189</p></a>
      </div></div>
      <div className="flex items-center space-x-6">
         <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
        <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black "/>
        </div>
       <div>
        <h1 className="text-[25px] mb-[0.2rem] text-[white]">Email</h1>
        <p className="text-[17px] w-[90%] text-white opacity-60"> msolmaz83@gmail.com</p>
      </div></div>



    </div>

    </div>
  )
}

export default Footer