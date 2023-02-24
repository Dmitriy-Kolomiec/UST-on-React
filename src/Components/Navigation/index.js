import React from "react";
import styles from './Nav.module.css'
import logo from './logo.png';

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <a className={styles.logo} href="#">
                <img src={logo} alt="logo"/>
            </a>
            <div className={styles.list}> 
            <a className={styles.link} href="#">Главная</a>
            <a className={styles.link} href="#">Команда</a>
            <a className={styles.link} href="#">Услуги</a>
            <a className={styles.link} href="#">Карьера</a>
            <a className={styles.link} href="#">Портфолио</a>
            <a className={styles.link} href="#">Контакты</a>
            <a className={styles.link} href="#">search</a>
            </div>
        </nav>
    )
}