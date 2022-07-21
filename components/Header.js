import styles from '../styles/Header.module.scss';
import Image from 'next/image';

const Header = () => (
    <div className={styles.container}> 
        <div className={styles.header}>
                       
            <div className={styles.header__burger}>
                <span></span>
            </div>

            <nav className={styles.header__menu}>

                <ul className={styles.menu__left}>
                    <li>
                        <a href='#' className={styles.header__link}>About</a>
                    </li>
                    <li>
                        <a href='#' className={styles.header__link}>Contact</a>
                    </li>
                </ul>

                <div>
                    <a href='' className={styles.header__title}>Camping.</a>
                </div>

                <ul className={styles.menu__right}>
                    <li>
                        <a href='#' className={styles.header__link}>Sign In</a>
                    </li>
                    <li>
                        <a href='#' className={styles.header__link}>Sign Up</a>
                    </li>
                    <li>
                        <a href='#' className={styles.header__link  + ' ' + styles.search}>
                            <Image src='/search-line.png' width='24px' height='24px'/>
                        </a>
                    </li>
                </ul>

            </nav>
            <hr className={styles.border}></hr>
        </div>     
        
    </div>
);

export default Header;