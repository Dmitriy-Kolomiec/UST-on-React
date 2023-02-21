import React from "react";
import styles from "./Portfolio.module.css";
import mobile from "./images/mobile.png";
import voice from "./images/voice.png";
import vroomgames from "./images/vroomgames.png";
import atol from "./images/atol.png";
import prorab from "./images/prorab.png";
import actual from "./images/actual.png";

function Portfolio() {
  return (
    <>
      <h4 className="info__block block-center">Портфолио</h4>
      <section>
        <section className={styles.portfolio__block}>
          <h2 className="title__block">Завершенные проекты</h2>
          <p className="text__subtitle text__subtitle-center">
            Мы специализируемся на предоставлении программного обеспечения
            высшего качества и предоставлении высококвалифицированных команд с
            опытом в области разработки блокчейнов, аналитики больших данных и
            AI/ML, а также услуг по разработке программного обеспечения на
            заказ.
          </p>
        </section>
        <section className={styles.completed__works}>
          <div className={styles.block__work}>
            <img src={mobile} alt="image" />
            <h5>Мобильный контроль</h5>
            <p>Сервис для работы с клиентами и партнёрами</p>
          </div>
          <div className={styles.block__work}>
            <img src={voice} alt="image" />
            <h5>Голосовое управление</h5>
            <p>Сервис для работы по задачам</p>
          </div>
          <div className={styles.block__work}>
            <img src={vroomgames} alt="image" />
            <h5>Vroomgames</h5>
            <p>Сервис для работы со списками заказов</p>
          </div>
          <div className={styles.block__work}>
            <img src={atol} alt="image" />
            <h5>ATOL-бонус</h5>
            <p>Мобильное приложения для профессионалов</p>
          </div>
          <div className={styles.block__work}>
            <img src={prorab} alt="image" />
            <h5>Prorab-x</h5>
            <p>Мобильное приложение для строителей</p>
          </div>
          <div className={styles.block__work}>
            <img src={actual} alt="image" />
            <h5>Актуаль</h5>
            <p>Сайт промом игры</p>
          </div>
        </section>
        <div className={styles.block__btn}>
          <button className="btn btn__white">Портфолио</button>
          <button className="btn">Заказать проект</button>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
