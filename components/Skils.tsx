import React from 'react'
import SkilsItems from './SkilsItems'
import SkilsLangue from './SkilsLangue'

const Skils = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">Educto && <span className='text-yellow-400'>Skill</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
<div>
    <SkilsItems title="React Developer" year="2021-2024"/>
    <SkilsItems title="MERN React Developer" year="2021-2024"/>
    <SkilsItems title="Mongo MySQL SQL " year="2021-2024"/>
    <SkilsLangue skill1="HTML" skill2="CSS" skill3="javascript" skill4="Backend" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" level4="w-[85%]"/>
</div>
<div>
    <SkilsItems title="TS Developer" year="2022-2024"/>
    <SkilsItems title="Node Js Developer" year="2021-2024"/>
    <SkilsItems title="Android<NATIVE> Developer" year="2021-2024"/>

    <SkilsLangue skill1="React Js" skill2="Next" skill3="TypeScript " skill4="ReactNATIVE" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" level4="w-[85%]"/>
</div>
        </div>
        </div>
  )
}

export default Skils