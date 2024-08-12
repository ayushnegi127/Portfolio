import React, { useState, useEffect, useRef } from 'react';
import './recommendations.css';

const Recommendations = () => {
  const [recommendationsData, setRecommendationsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 to show the first actual card
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/recommendations')
      .then(response => response.json())
      .then(data => {
        const numItems = data.length;

        // Duplicate items for circular effect
        const items = [
          data[numItems - 1], // Last item for seamless effect
          ...data,
          data[0] // First item for seamless effect
        ];

        setRecommendationsData(items);

        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % items.length;
            return newIndex === 0 ? 1 : newIndex; // Skip showing the duplicated first card
          });
        }, 3000); // Adjust time as needed

        return () => clearInterval(interval);
      })
      .catch(error => console.error('Error fetching recommendations:', error));
  }, []);

  useEffect(() => {
    if (carouselRef.current && recommendationsData.length) {
      const itemWidth = carouselRef.current.offsetWidth / recommendationsData.length;
      const offset = -((currentIndex + 1) * itemWidth); // Adding 1 to account for the duplicated item
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, recommendationsData]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index + 1); // Skip the duplicated first card
  };

  return (
    <div className="recommendations-section">
      <h2>Recommendations</h2>
      <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet <br /> Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum</p>
      <div className="recommendations-carousel">
        <div className="recommendations-wrapper" ref={carouselRef}>
          {recommendationsData.map((recommendation, index) => (
            <div className="recommendation-card" key={index}>
              <div className="rating">
                {'★'.repeat(recommendation.rating)}{'☆'.repeat(5 - recommendation.rating)}
              </div>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.text}</p>
              <div className="recommendation-author">
                <img src={recommendation.imgSrc} alt={recommendation.name} />
                <div>
                  <h4>{recommendation.name}</h4>
                  <p>{recommendation.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {recommendationsData.length && recommendationsData.slice(1, -1).map((_, index) => (
          <span
            className={`indicator ${currentIndex === index + 1 ? 'active' : ''}`}
            key={index}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
