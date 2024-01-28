import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                    <h1>BRADLEY KERR</h1>
                    <p>FULL STACK SOFTWARE DEVELOPER</p>
           
            <nav>
                <ul>
                    <li><a href="#intro">Projects</a></li>
                    <li><a href="#work">Blog</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;