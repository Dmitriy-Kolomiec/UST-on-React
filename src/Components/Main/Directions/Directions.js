import React from "react";
import styles from "./Directions.module.css";
import devImg from "./images/dev.png";
import testImg from "./images/test.png";
import supportImg from "./images/support.png";
import analiticImg from "./images/analitic.png";
import prototypeImg from "./images/prototype.png";
import designImg from "./images/design.png";
import arrow from "./images/Arrow_1.png";

export const Directions = () => {
  return (
    <>
      <h4 className="info__block">Наши предложения</h4>
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
            <img src={devImg} alt="Значок" />
            <h4>Программируем</h4>
            <p className={styles.text}>
              Создаём расширяемую архитектуру, пишем чистый и стабильный код.
              Интегрируемся с технологиями заказчика.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={testImg} alt="Значок" />
            <h4>Тестируем</h4>
            <p className={styles.text}>
              Проводим ручное функциональное тестирование и пишем UI-автотесты.
              Готовим чек-листы и тест-кейсы.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={supportImg} alt="Значок" />
            <h4>Поддерживаем</h4>
            <p className={styles.text}>
              Работаем по SLA. Следим за стабильностью работы приложения,
              обновляем под новые устройства и версии iOS и Android.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={analiticImg} alt="Значок" />
            <h4>Анализируем</h4>
            <p className={styles.text}>
              Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
              заказчика и потребности пользователей.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={prototypeImg} alt="Значок" />
            <h4>Прототипируем</h4>
            <p className={styles.text}>
              Прорабатываем пользовательские сценарии, проектируем логику
              приложения, скечируем основные экраны.
            </p>
          </div>
          <div className={styles.direction}>
            <img src={designImg} alt="Значок" />
            <h4>Дизайним</h4>
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