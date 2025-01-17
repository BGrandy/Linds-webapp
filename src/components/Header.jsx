import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { useEffect, useState, useCallback } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePage] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const handleLinkClick = useCallback((page) => {
        setActivePage(page);
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);


    return (
        <>
            <div className={`overlay ${isMenuOpen ? 'visible' : ''}`}></div>
            <header className={`header ${isScrolled ? 'hidden' : `${isMenuOpen ? 'show' : ''}`}`}>
                <nav>
                    <ul>
                        {['/', '/Research', '/Publications', '/Team'].map((path) => (
                            <li key={path}><Link to={path}
                                className={activePage === path ? 'active' : ''}
                                onClick={() => handleLinkClick({ path })}>
                                {path === '/' ? 'Home' : path.slice(1)}
                            </Link></li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div>
                <label
                    className={`burger ${isScrolled ? 'hidden' : isMenuOpen ? 'white' : ''}`}
                    htmlFor="burger">
                    <input type="checkbox" id="burger" onChange={toggleMenu} checked={isMenuOpen} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </>
    )
}

export default Header