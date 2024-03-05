import React from 'react'
import SkilsItems from './SkilsItems'
import SkilsLangue from './SkilsLangue'

const Skils = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">Educto && <span className='text-yellow-400'>Skill</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
<div>
    <SkilsItems title="React Developer" year="2021-2024" inner="React is a powerful JavaScript library for building user interfaces. It simplifies development by using reusable components, making it ideal for creating dynamic and interactive web applications.
Redux is a state management library for JavaScript apps, commonly used with React. It helps maintain application state in a centralized store, offering a predictable way to manage and update state in complex applications."/>
    <SkilsItems title="MERN React Developer" year="2021-2024" inner="A MERN Stack Developer is a skilled professional well-versed in building web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. With expertise in both frontend (React.js) and backend (Node.js, Express.js, MongoDB) technologies, they create seamless and responsive full-stack applications. MERN developers leverage their knowledge of JavaScript to design and implement robust, scalable, and interactive solutions. Their proficiency in the MERN stack allows them to contribute to the entire development process, from database design to user interface implementation."/>
    <SkilsItems title="Mongo MySQL SQL " year="2021-2024" inner="MongoDB, MySQL, and SQL are prominent database technologies. MongoDB is a NoSQL database known for its flexibility, scalability, and JSON-like document structure. MySQL is a relational database management system (RDBMS) widely used for structured data, transactions, and reliability. SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. These technologies serve diverse needs, offering solutions for both NoSQL and relational database requirements in various applications."/>
    <SkilsLangue skill1="HTML" skill2="CSS" skill3="javascript" skill4="Backend" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" level4="w-[85%]"/>
</div>
<div>
    <SkilsItems title="TS Developer" year="2022-2024"inner="A TypeScript (TS) developer specializes in using TypeScript, a superset of JavaScript that adds static typing. TS enhances code quality and developer productivity by catching errors during development. A TS developer leverages strong typing and modern JavaScript features, contributing to the creation of robust and maintainable applications."/>
    <SkilsItems title="Node Js Developer" year="2021-2024"inner="A Node.js Developer specializes in using Node.js, a server-side JavaScript runtime. Proficient in both frontend and backend development, Node.js Developers leverage its non-blocking, event-driven architecture to create scalable and high-performance applications. They work with frameworks like Express.js, build RESTful APIs, and handle data storage with databases like MongoDB. Node.js Developers contribute to the efficient and seamless functioning of web applications, making them adept at creating real-time applications, APIs, and microservices"/>
    <SkilsItems title="Android<NATIVE> Developer" year="2021-2024" inner="An Android (Native) Developer is a skilled professional focused on creating native Android applications using Java or Kotlin programming languages. They have expertise in Android SDKs, UI/UX design principles, and various device capabilities. Native Android Developers collaborate to build applications that take full advantage of the Android platform's features, ensuring optimal performance and user experience. They work with Android Studio, integrate third-party libraries, and address compatibility issues across different Android devices. Native Android Developers play a crucial role in crafting responsive, efficient, and visually appealing mobile applications for the Android ecosystem"/>

    <SkilsLangue skill1="React Js" skill2="Next" skill3="TypeScript " skill4="ReactNATIVE" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" level4="w-[85%]"/>
</div>
        </div>
        </div>
  )
}

export default Skils