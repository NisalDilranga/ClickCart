import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./items.css";

const Top_Item_Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
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
    <div className="cat_cart">
      <div className="card2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...settings} className="cart_slider-main">
            {products.map(product => (
              <div key={product._id}>
                <div className="card">
                  <img src={product.images}  />
                  
                  <p>${product.price}</p>
                  {/* Add more details as needed */}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Top_Item_Card;
