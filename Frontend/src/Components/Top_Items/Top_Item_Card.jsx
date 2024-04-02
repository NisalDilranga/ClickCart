
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import "./items.css";


const Top_Item_Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
  };

  return (
    <>
 <div className="cat_cart">
    <div className="card2">
      <Slider {...settings} className="cart_slider-main">
      {products.map(product => (
              <div key={product.id}>
                <div className="card">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  
                  {/* Add more details as needed */}
                </div>
              </div>
            ))}
      </Slider>

    </div>
   </div>
    </>
  )
}

export default Top_Item_Card