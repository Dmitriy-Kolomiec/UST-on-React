import React from "react";
import styles from "./Header.module.css";


function Header() {
  return (
    <section className={styles.header__block}>
      <section className={styles.block}>
        <h1 className={styles.title}>
          Студия разработки программного обеспечения{" "}
          <span>с продуктовым мышлением</span>
        </h1>
        <h3 className={styles.subtitle}>
          Мы создаем кроссплатформенные мобильные приложения и веб-платформы и
          находим для них лучшие решения.
        </h3>
        <button className="btn">Заказать проект</button>
      </section>
      ,
      <article className={styles.block__statistic}>
        <div className={styles.item}>
          <h2>4+</h2>
          <h3>Года опыта</h3>
        </div>
        <div className={styles.item}>
          <h2>30+</h2>
          <h3>Завершенных проектов</h3>
        </div>
        <div className={styles.item}>
          <h2>4+</h2>
          <h3>Года опыта</h3>
        </div>
        <div className={styles.item}>
          <h2>4+</h2>
          <h3>Года опыта</h3>
        </div>
      </article>
    </section>
  );
}

export default Header;
