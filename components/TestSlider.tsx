import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client from './Client';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestSlider = () => {
  return (
    <div>
    <Carousel

additionalTransfrom={0}
arrows={true}
  responsive={responsive}
 

  autoPlay={true }
  autoPlaySpeed={5000}
  centerMode = {false}
  infinite
  itemClass="item"
>
  <Client image="/images/c1.jpg" name="Yavuz Tokus" role="Web Developer" decs=" He has contributed a lot to our work and loves to learn. I would like to thank him for being very compatible with the friendly environment and working with the team."/>
  <Client image="/images/c2.jpg" name="Dursun Ayhan" role="Software" decs='
He is very friendly and loves solving problems and has very stimulating ideas. The days I worked with him were very nice and I was impressed by how quickly he adapted to the team.'/>

</Carousel> </div>
  )
}

export default TestSlider
