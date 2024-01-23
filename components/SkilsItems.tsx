interface Props {
    title:string,
    year:string,
}

const SkilsItems = ({title,year}:Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
        <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[#556e5] border-[2px]">
            {year}
        </span>
        <h1 className="mt-[2rem] uppercase mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">{title} </h1>
        <p className="text-white font-normal w-[80%] text-[17px] opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum quae voluptas omnis accusantium ipsum accusamus, sunt consequuntur, commodi assumenda hic maxime et eaque excepturi nemo quos, saepe beatae! Obcaecati cumque voluptates doloremque iste.</p>
    </div>
  )
}

export default SkilsItems