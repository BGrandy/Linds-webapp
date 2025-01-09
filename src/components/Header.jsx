import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { useEffect, useState } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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



    return (
        <header className={`header ${isScrolled ? 'hidden' : ''}`}>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Research'>Research</Link></li>
                    <li><Link to='/Publications'>Publications</Link></li>
                    <li><Link to='/Team'>Team</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header