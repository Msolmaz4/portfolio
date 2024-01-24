import TestSlider from "./TestSlider"


const Testi = () => {
  return (
    <div className="bg-[#02020a] pt-[4rem] md:pt-[8rem]">
        <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase"> Client <span className="text-yellow-400">Review</span></h1>
        <div className="pt-[5px] pb-[4rem] w-[80%] mx-auto">
            <TestSlider/>
        </div>
    </div>
  )
}

export default Testi