import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <section className={styles.header__block}>
      <div className={styles.block}>
        <h1 className={styles.title}>
          Студия разработки программного обеспечения{" "}
          <span className={styles.title__row}>с продуктовым мышлением</span>
        </h1>
        <h3 className={styles.subtitle}>
          Мы создаем кроссплатформенные мобильные приложения и веб-платформы и
          находим для них лучшие решения.
        </h3>
        <button className="btn">Заказать проект</button>
      </div>
      ,
      <div className={styles.block__statistic}>
        <div className={styles.item}>
          <h4>
            4+<br></br>
            <span>Года опыта</span>
          </h4>
        </div>
        <div className={styles.item}>
          <h4>
            30+<br></br>
            <span>Завершенных проектов</span>
          </h4>
        </div>
        <div className={styles.item}>
          <h4>
            4+<br></br>
            <span>Года опыта</span>
          </h4>
        </div>
        <div className={styles.item}>
          <h4>
            4+<br></br>
            <span>Года опыта</span>
          </h4>
        </div>
      </div>
    </section>
  );
};
