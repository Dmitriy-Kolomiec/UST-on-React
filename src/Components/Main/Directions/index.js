import React from "react";
import styles from "./Directions.module.css";
import * as images from "./images/index";

const DirectionItem = ({ image, title, text }) => {
  return (
    <div className={styles.direction}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const directionsData = [
  {
    image: images.dev,
    title: "Программируем",
    text: "Мы можем разработать для вас любое индивидуальное решение. Наша компания обладает широкими возможностями для успешного создания технически-сложных систем.",
  },
  {
    image: images.test,
    title: "Тестируем",
    text: "Проводим ручное функциональное тестирование и пишем UI-автотесты. Готовим чек-листы и тест-кейсы.",
  },
  {
    image: images.support,
    title: "Поддерживаем",
    text: "Работаем по SLA. Следим за стабильностью работы приложения, обновляем под новые устройства и версии iOS и Android.",
  },
  {
    image: images.analitic,
    title: "Анализируем",
    text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователе",
  },
  {
    image: images.model,
    title: "Прототипируем",
    text: "Прорабатываем пользовательские сценарии, проектируем логику приложения, скечируем основные экраны.",
  },
  {
    image: images.design,
    title: "Дизайним",
    text: "Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы",
  },
];

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
          {directionsData.map(({ image, title, text }, index) => {
            return (
              <DirectionItem
                key={index}
                image={image}
                title={title}
                text={text}
              />
            );
          })}
        </section>
        <a href="#" className={styles.link__all__directions}>
          Все услуги
          <img src={images.arrow} alt="arrow" />
        </a>
      </section>
    </>
  );
};
