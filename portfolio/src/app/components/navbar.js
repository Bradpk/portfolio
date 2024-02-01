import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-md nav-dark ${styles.navbar}`}>
            <div className='container-fluid'>
                <button className='navbar-toggler' data-toggle='collapse' data-target='#main-nav'><span className='navbar-toggler-icon'></span></button>
                <div className='collapse navbar-collapse justify-content-center align-center' id='main-nav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className='nav-link' href='/'>HOME</Link></li>
                        <li className='nav-item'><Link className='nav-link' href='/projects'>PROJECTS</Link></li>
                        <li className='nav-item'><Link className='nav-link' href='/about'>BLOG</Link></li>
                        <li className='nav-item'><Link className='nav-link' href='/about'>ABOUT</Link></li>
                        <li className='nav-item'><Link className='nav-link' href='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;