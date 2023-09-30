import { useLocation } from 'react-router-dom';
import './LinkToPage.css';

const LinkToPage = ({ shouldAnimate }) => {
    const location = useLocation();

    return (
        <>
        <h2 className={`titleLinkToPage ${shouldAnimate ? 'titleLinkToPageMove' : ''} ${location.pathname === '/page2' ? 'titleLinkToPage2None' : ''}`} to="/page2">BIT BUSTER</h2>
        <h2 className={`titleLinkToPage2 ${shouldAnimate ? 'titleLinkToPage2Opacity' : ''} ${location.pathname === '/page2' ? 'titleLinkToPage2Visible' : ''}`} to="/">Современные технологии</h2>
        </>
    );
}

export default LinkToPage;