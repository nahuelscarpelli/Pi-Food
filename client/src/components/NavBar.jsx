import React from 'react';
import styles from '../css/NavBar.module.css';

export default function NavBar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div><img className={styles.logoimg} src="logoapp.png" alt="logoapp" /></div>
                <div><span className={styles.appTittle}>Henry Recipes</span></div>
                <div>
                    <ul className={styles.menulist}>
                        <li>Home</li>
                        <li>Create</li>
                        <li>About me</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}