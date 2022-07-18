import styles from '../styles/Header.module.scss';
import Image from 'next/image';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.nav}>

            <div className={styles.nav__left}>
                <h5>About</h5>
                <h5>Contact</h5>
            </div>

            <h3>Camping.</h3>
            
            <div className={styles.nav__right}>
                <h5>Sign In</h5>
                <h5>Sign Up</h5>
                <div className={styles.search}> 
                    <img src='/search-line.png'></img>
                </div>
            </div>

        </div>       
        <hr className={styles.border}></hr>
    </div>
);

export default Header;