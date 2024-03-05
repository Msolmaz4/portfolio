interface Props {
    title:string,
    year:string,
    inner:string
}

const SkilsItems = ({title,year,inner}:Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] text-justify">
        <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[#556e5] border-[2px]">
            {year}
        </span>
        <h1 className="mt-[2rem] uppercase mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">{title} </h1>
        <p className="text-white font-normal w-[80%] text-[17px] opacity-80">  {inner}.</p>
    </div>
  )
}

export default SkilsItems