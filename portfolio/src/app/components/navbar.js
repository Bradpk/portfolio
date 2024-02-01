import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-sm ${styles.navbar}`}>
            <div className='container-fluid'>
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navigation'>
                <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center align-center' id='navbarNav'>
                    <ul className={`navbar-nav ${styles.navoptions}`}>
                        <li className='nav-item'><Link className='nav-link text-light' href='/'>HOME</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' href='/projects'>PROJECTS</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' href='/about'>BLOG</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' href='/about'>ABOUT</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' href='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;