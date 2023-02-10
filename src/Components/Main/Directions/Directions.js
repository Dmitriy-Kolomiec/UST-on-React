import React from "react";
import styles from "./Directions.module.css";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import five from "./images/5.png";
import six from "./images/6.png";
import arrow from "./images/Arrow_1.png";

function Directions() {
  return (
    <>
      <h3 className="info__block">Наши предложения</h3>
      <section className={styles.block__offers}>
        <div className={styles.info_offers}>
          <h2 className="title__block">Разработка полного цикла</h2>
          <p className="text__subtitle">
            Мы можем разработать для вас любое индивидуальное решение. Наша
            компания обладает широкими возможностями для успешного создания
            технически-сложных систем.
          </p>
        </div>
        <section className={styles.directions}>
          <div className={styles.direction}>
            <img src={one} alt="Значок" />
            <h3>Программируем</h3>
            <p className={styles.text}>
              Создаём расширяемую архитектуру, пишем чистый и стабильный код.
              Интегрируемся с технологиями заказчика.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={two} alt="Значок" />
            <h3>Тестируем</h3>
            <p className={styles.text}>
              Проводим ручное функциональное тестирование и пишем UI-автотесты.
              Готовим чек-листы и тест-кейсы.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={three} alt="Значок" />
            <h3>Поддерживаем</h3>
            <p className={styles.text}>
              Работаем по SLA. Следим за стабильностью работы приложения,
              обновляем под новые устройства и версии iOS и Android.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={four} alt="Значок" />
            <h3>Анализируем</h3>
            <p className={styles.text}>
              Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
              заказчика и потребности пользователей.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={five} alt="Значок" />
            <h3>Прототипируем</h3>
            <p className={styles.text}>
              Прорабатываем пользовательские сценарии, проектируем логику
              приложения, скечируем основные экраны.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={six} alt="Значок" />
            <h3>Дизайним</h3>
            <p className={styles.text}>
              Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем
              удобные и понятные интерфейсы.
            </p>
          </div>
        </section>
        <a href="#" className={styles.link__all__directions}>
          Все услуги
          <img src={arrow} alt="arrow" />
        </a>
      </section>
    </>
  );
}

export default Directions;
