import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div>
 <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Muhammet ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web develepor',
        1000,
        'Frontent && Backend',
        1000,
        'Programmer',
        1000
      ]}
     
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />


    </div>
  )
}

export default TextEffect
