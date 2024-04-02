import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categry.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block",
        background: "black",
        position : "relative",
        top: "-210px",
        left:"1400px",
        borderRadius:"50%"
        }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
         display: "block",
         background: "black",
         position : "relative",
         left:"1370px" ,
         top:"-20px",
         borderRadius:"50%"
        
        }}
      onClick={onClick}
    />
  );
};

const Categry = () => {


  var settings = {
    
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
 
  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
   <div className="cat_cart">
    <div className="card2">
      <h3 className="hd">Top Categorys</h3>
      <Slider {...settings} className="cart_slider-main">
       <div className="item1">
         <h1>1</h1>
       </div>
       <div className="item1">
         <h1>2</h1>
       </div>
       <div className="item1">
         <h1>3</h1>
       </div>
       <div className="item1">
         <h1>4</h1>
       </div>
       <div className="item1">
         <h1>5</h1>
       </div>
       <div className="item1">
         <h1>6</h1>
       </div>
       <div className="item1">
         <h1>7</h1>
       </div>
       <div className="item1">
         <h1>8</h1>
       </div>
       <div className="item1">
         <h1>9</h1>
       </div>
       <div className="item1">
         <h1>10</h1>
       </div>
       <div className="item1">
         <h1>11</h1>
       </div>
      </Slider>

    </div>
   </div>
    </>
  );
};

export default Categry;
