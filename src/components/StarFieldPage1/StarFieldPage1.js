import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './StarFieldPage1.css';
import '../../PageTransition.css';
import starSound from '../../sound/white-noise-loop-6-ripple-sound-effect-36856080.mp3';

const StarFieldPage1 = ({ shouldAnimate, setShouldAnimate }) => {
 const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 950; i++) {
      const size = Math.random() * 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const isTwinkling = Math.random() < 0.1;
      const twinklingDelay = Math.random() * 2000;
      stars.push({ size, left, top, isTwinkling, twinklingDelay });
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
        setShouldAnimate(false)
    }, 1900);
    }
  };

useEffect(() => {
    if (shouldAnimate) {
        const starElements = document.querySelectorAll('.star');
        starElements.forEach((star, index) => {
        setTimeout(() => {
        star.classList.add('star-to-ray');
      }, index * 1.2);
    });

    const audioElement = new Audio(starSound);
    audioElement.play();
    audioElement.volume = 0.1;
     setTimeout(() => {
      const fadeOutInterval = setInterval(() => {
        if (audioElement.volume > 0.001) {
          audioElement.volume -= 0.001;
        } else {
          audioElement.pause();
          clearInterval(fadeOutInterval);
        }
      }, 10);
    }, 1000);
    }
    
  }, [shouldAnimate]);

  return (
    <div className={`star-field-container page-enter ${shouldAnimate ? 'page-exit' : ''}`} onWheel={handleScroll}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${star.isTwinkling ? 'twinkling' : ''}`}
          style={{
            height: star.size + 'px',
            left: star.left + '%',
            top: star.top + '%',
          }}
        />
      ))}
    </div>
  );
};

export default StarFieldPage1;