import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../../styles/payment.module.css";

const Payment = () => {
    return (
        <div className={styles.payment}>
            <Header />
            <div className="container">
                <div className={styles.payment__wrap}>
                    <div className={styles.payment__info}>
                        <div className={styles.payment__cirlce}></div>
                        <div className={styles.payment__cirlce_yellow}></div>
                        <div className={styles.payment__inner}>
                            <h1 className={styles.payment__title}>
                                Принимаем любые <br /> способы оплаты
                            </h1>
                            <p className={styles.payment__text}>
                                Для физических лиц и юридических лиц
                            </p>
                            <div className={styles.payment__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Наличный и безналичный расчет</p>
                            </div>
                            <div className={styles.payment__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Расчет на месте</p>
                            </div>
                            <div className={styles.payment__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Открываем спецсчета в банках</p>
                            </div>
                            <div className={styles.payment__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Отгружаем под банковские гарантии</p>
                            </div>
                            <div className={styles.payment__item}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>Отсрочки платежа постоянным клиентам</p>
                            </div>
                            <div className={styles.payment__button}>
                                <p>Задать вопрос</p>
                                <div>
                                    <img src="/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.payment__image}>
                        <img src="/images/pay.png" alt="" />
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    );
};

export default Payment;
