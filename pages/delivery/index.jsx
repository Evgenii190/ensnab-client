import classNames from "classnames";
import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../../styles/delivery.module.css";

const delivery = () => {
    return (
        <div className={styles.delivery}>
            <Header />
            <div
                className={classNames("container", styles.container__delivery)}
            >
                <div className={styles.delivery__wrap}>
                    <div className={styles.delivery__info}>
                        <div className={styles.delivery__cirlce}></div>
                        <div className={styles.delivery__cirlce_yellow}></div>
                        <div className={styles.delivery__inner}>
                            <h1 className={styles.delivery__title}>
                                Доставка продукции
                                <br />
                                <span> до вашего объекта - от 1 дня</span>
                            </h1>
                            <p className={styles.delivery__text}>
                                транспортными компаниями в любую точку мира
                            </p>
                            <div className={styles.delivery__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>
                                    Выдаем с грузом сопроводительные <br />{" "}
                                    документы: ТТН, счет-фактура, акт <br />{" "}
                                    выполненных работ и УПД
                                </p>
                            </div>
                            <div className={styles.delivery__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Отгружаем под банковские гарантии</p>
                            </div>

                            <div className={styles.delivery__button}>
                                <p>Задать вопрос</p>
                                <div>
                                    <img src="/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.delivery__image}>
                        <img src="/images/car.png" alt="" />
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    );
};

export default delivery;
