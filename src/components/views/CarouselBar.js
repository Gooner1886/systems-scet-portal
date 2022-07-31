import { color, width } from '@mui/system';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CaroStyle = {
  padding: '3.rem',
  background: 'grey',
  width: '23.62rem',
  height: '15rem'
}

function CarouselBar() {
  return (
    <div>
        <Carousel responsive={responsive}>
            <div style={CaroStyle}>Item 1</div>
            <div style={CaroStyle}>Item 2</div>
            <div style={CaroStyle}>Item 3</div>
            <div style={CaroStyle}>Item 4</div>      
        </Carousel>
    </div>
  )
}

export default CarouselBar
