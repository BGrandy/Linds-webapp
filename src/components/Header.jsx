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
            <header className={`header ${isScrolled ? 'hidden' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to='/' 
                        className={activePage === '/' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/')}>
                        Home</Link></li>

                        <li><Link to='/Research' 
                        className={activePage === '/Research' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Research')}>
                        Research</Link></li>

                        <li><Link to='/Publications' 
                        className={activePage === '/Publications' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Publications')}>
                        Publications</Link></li>

                        <li><Link to='/Team' 
                        className={activePage === '/Team' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Team')}>
                        Team</Link></li>
                    </ul>
                </nav>
            </header>
            <header className={`header-mobile ${isMenuOpen ? 'show' : 'hide'}`}>
                <nav>
                    <ul>
                        <li><Link to='/' 
                        className={activePage === '/' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/')}>
                        Home</Link></li>

                        <li><Link to='/Research' 
                        className={activePage === '/Research' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Research')}>
                        Research</Link></li>

                        <li><Link to='/Publications' 
                        className={activePage === '/Publications' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Publications')}>
                        Publications</Link></li>

                        <li><Link to='/Team' 
                        className={activePage === '/Team' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/Team')}>
                        Team</Link></li>
                    </ul>
                </nav>
            </header>
            <label 
            className={`burger ${isMenuOpen ? 'white' : ''}`} 
            htmlFor="burger">
                <input type="checkbox" id="burger" onChange={toggleMenu} checked={isMenuOpen} />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className={`overlay ${isMenuOpen ? 'visible' : ''}`}></div>
        </>
    )
}

export default Header