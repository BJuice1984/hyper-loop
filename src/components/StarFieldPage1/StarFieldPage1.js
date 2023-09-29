import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StarFieldPage1.css';
import '../../PageTransition.css';

const StarFieldPage1 = () => {
 const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 650; i++) {
      const size = Math.random() * 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      stars.push({ size, left, top });
    }
    return stars;
  }, []);

  const navigate = useNavigate();

  const handleScroll = (e) => {
    const delta = e.deltaY;

    if (delta > 0) {
    setShouldAnimate(true)
      setTimeout(() => {
        navigate('/page2');
    }, 1900);
    }
  };

  function getRandomTwinkleProbability() {
  return Math.random() < 0.1;
};

const [shouldAnimate, setShouldAnimate] = useState(false);

useEffect(() => {
    if (shouldAnimate) {
        const starElements = document.querySelectorAll('.star');
        starElements.forEach((star, index) => {
        setTimeout(() => {
        star.classList.add('star-to-ray');
      }, index * 2);
    });
    }
    
  }, [shouldAnimate]);

  return (
    <div className={`star-field-container page-enter ${shouldAnimate ? 'page-exit' : ''}`} onWheel={handleScroll}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${getRandomTwinkleProbability() ? 'twinkling' : ''}`}
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.left + '%',
            top: star.top + '%',
          }}
        />
      ))}
      <Link className='title' to="/page2" >Bit Buster</Link>

    </div>
  );
};

export default StarFieldPage1;