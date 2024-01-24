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
  <Client image="/images/c1.jpg" name="Sal Taluk" role="Web Developer"/>
  <Client image="/images/c2.jpg" name="must Sol" role="Backend Developer"/>
  <Client image="/images/c2.jpg" name="must Sol" role="Backend Developer"/>
</Carousel> </div>
  )
}

export default TestSlider
