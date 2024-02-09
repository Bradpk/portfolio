import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.homename}>
                <h1>BRADLEY KERR</h1> <br></br>
                <p>FULL STACK SOFTWARE DEVELOPER</p>
                </div>
        </header>
    );
}

export default Header;