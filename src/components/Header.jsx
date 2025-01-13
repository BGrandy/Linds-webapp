import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { useEffect, useState } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePage] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (page) => {
        setActivePage(page); // Update the active page when a link is clicked
    };


    return (
        <header className={`header ${isScrolled ? 'hidden' : ''}`}>
            <nav>
                <ul>
                    <li><Link to='/'
                    className={activePage === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}>Home</Link></li>
                    <li><Link to='/Research'
                    className={activePage === '/Research' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Research')}>Research</Link></li>
                    <li><Link to='/Publications'
                    className={activePage === '/Publications' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Publications')}>Publications</Link></li>
                    <li><Link to='/Team'
                    className={activePage === '/Team' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Team')}>Team</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header