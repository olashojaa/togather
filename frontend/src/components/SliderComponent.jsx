import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../assets/style/slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image4 from '../assets/images/image4.jpg';

const SliderComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sliders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.sliders);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='row mt-20'> 
    <div className="slider-container col-md-7 col-sm-12">
      <Slider {...settings}>
        {data.map((slide) => (
          <div key={slide.id} className="slide-item">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="slide-text">
              <h3>{slide.header}</h3>
              <p> {slide.body}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="col-md-5 col-sm-12 slider2">
    <img src={image4} />
    <div className="slide2-text">
              <h3>عيش التجارب المثيرة في السعودية</h3>
              <p> أكثر من تجربة ينضمها أبناء السعودية من جولات سياحية وتجارب رياضية والمزيد من ذلك</p>
              <button>تصفح جميع التجارب</button>
            </div>

    </div>
    </div>
  );
};

export default SliderComponent;