import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/carousel/scet1.png' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/carousel/scet2.png' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/carousel/carousel2.png' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/carousel/scet4.png' alt=""/>
            </Wrap>
        </Carousel>
    );
};


const Carousel = styled(Slider)`{
  margin-top: 100px;
  overflow: hidden;
  & > button {
    opacity: 1;
    height: 100%;
    width: 400px;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: black;
    }
  }

  li.slick-active button:before {
    color: black;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
}`;

const Wrap = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  height: 325px;

  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    padding: 0;
    border: 4px solid #f9f9f9;
    transition-duration: 300ms;
  }
`;



export default ImgSlider;