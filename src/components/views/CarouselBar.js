// import { color, width } from '@mui/system';
// import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// const CaroStyle = {
//   marginTop:'100px',
//   padding: '3.rem',
//   background: '#e4e4e4',
//   width: '30rem',
//   height: '15rem'
// }

// function CarouselBar() {
//   return (
//     <div style={{
//       padding: '35px'
//     }}>
//         <Carousel responsive={responsive}>
//             <div style={CaroStyle}>Item 1</div>
//             <div style={CaroStyle}>Item 2</div>
//             <div style={CaroStyle}>Item 3</div>
//             <div style={CaroStyle}>Item 4</div>      
//         </Carousel>
//     </div>
//   )
// }

// export default CarouselBar

import React, { Component } from "react";
import Slider from "react-slick";

export default class CarouselBar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ margin:' 8% 5%',paddingTop: '15rem', backgroundColor:'#d9d9d9'}}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
