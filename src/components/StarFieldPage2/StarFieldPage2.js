import { Link, useNavigate } from 'react-router-dom';
import './StarFieldPage2.css';
import '../../PageTransition.css';

const StarFieldPage2 = () => {
  const stars = [];
  for (let i = 0; i < 150; i++) {
    const size = Math.random() * 3;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const isTwinkling = Math.random() < 0.1;
    stars.push({ size, left, top, isTwinkling });
  }

  const navigate = useNavigate();

  const handleScroll = (e) => {
    const delta = e.deltaY;


    if (delta < 0) {
      setTimeout(() => {
        navigate('/');
    }, 1000);
    }
  };

  return (
    <div className="star-field-container page-enter" onWheel={handleScroll}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${star.isTwinkling ? 'twinkling-page-2' : ''}`}
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.left + '%',
            top: star.top + '%',
          }}
        />
      ))}
      <Link className='title-page2' to="/" >Современные технологии</Link>
    </div>
  );
};

export default StarFieldPage2;