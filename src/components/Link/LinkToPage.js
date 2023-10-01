import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LinkToPage.css';

const LinkToPage = ({ shouldAnimate, setShouldAnimate }) => {
    const location = useLocation();
    const navigate = useNavigate();

     const handleClickToPage2 = (e) => {
        e.preventDefault();
        setShouldAnimate(true)
        setTimeout(() => {
        navigate('/page2');
        setShouldAnimate(false)
    }, 1900);
    }

    return (
        <>
        <Link onClick={handleClickToPage2} className={`titleLinkToPage ${shouldAnimate ? 'titleLinkToPageMove' : ''} ${location.pathname === '/page2' ? 'titleLinkToPage2None' : ''}`}>Bit Buster</Link>
        <Link className={`titleLinkToPage2 ${shouldAnimate ? 'titleLinkToPage2Opacity' : ''} ${location.pathname === '/page2' ? 'titleLinkToPage2Visible' : ''}`} to="/">Современные технологии</Link>
        </>
    );
}

export default LinkToPage;