import React from "react";
import styles from "./Delivery.module.css";
import classnames from "classnames";

const Delivery = ({ type }) => {
    return (
        <div className={styles.delivery}>
            <div className={styles.delivery__circle1}></div>
            <div className={styles.delivery__circle2}></div>
            {!type && (
                <>
                    <div className={styles.delivery__decor1}>
                        <img src="/images/delivery_decor1.png" alt="" />
                    </div>
                    <div className={styles.delivery__decor2}>
                        <img src="/images/delivery_decor2.png" alt="" />
                    </div>
                    <div className={styles.delivery__decor3}>
                        <img src="/images/delivery_decor3.png" alt="" />
                    </div>
                    <div className={styles.delivery__decor4}>
                        <img src="/images/delivery_decor4.png" alt="" />
                    </div>
                </>
            )}

            <div className={styles.delivery__inner}>
                <div className="container">
                    <div className={styles.delivery__wrap}>
                        <div>
                            {type ? (
                                <div className={styles.delivery__title__type}>
                                    <p>12</p>
                                    <p>
                                        Направлений работы <br /> с металом и
                                        литьем
                                    </p>
                                </div>
                            ) : (
                                <h1 className={styles.delivery__title}>
                                    Рассчитайте стоимость <br /> необходимой
                                    поставки
                                </h1>
                            )}

                            <div className={styles.delivery__item}>
                                <div>
                                    <img
                                        src="/images/done_delivery.png"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Услуги в любых объемах <br /> и в
                                    минимальные сроки
                                </p>
                            </div>
                            <div className={styles.delivery__item}>
                                <div>
                                    <img
                                        src="/images/done_delivery.png"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Предоставляем соответствующие <br />{" "}
                                    сертификаты и документы
                                </p>
                            </div>
                            <div className={styles.delivery__item}>
                                <div>
                                    <img
                                        src="/images/done_delivery.png"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Отсрочка платежа <br /> постоянным клиентам
                                </p>
                            </div>
                        </div>
                        <div className={styles.delivery__form}>
                            <h3 className={styles.delivery__form_title}>
                                Хотите рассчитать <br /> стоимость заказа ?
                            </h3>
                            <p className={styles.delivery__form_text}>
                                Оставьте заявку и в течение 10 минут с вами
                                <br />
                                свяжется наш специалист и рассчитает стоимость
                            </p>
                            <input
                                className={styles.delivery__input}
                                placeholder="Введите ваше телефон"
                                type="text"
                            />
                            <input
                                className={styles.delivery__input}
                                placeholder="Наименование организации / инн"
                                type="text"
                            />
                            <textarea
                                className={classnames(
                                    styles.delivery__input,
                                    styles.delivery__area
                                )}
                                placeholder="Ваш комментарий к заказу"
                                type="text"
                            />
                            <div className={styles.delivery__form_button}>
                                <p>Получить консультацию</p>
                                <div>
                                    <img src="/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.delivery__form_accept}>
                                <div>
                                    <input
                                        className={
                                            styles.delivery__form_checkbox
                                        }
                                        type="checkbox"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <p>
                                    Даю своё согласие на обработку моих <br />
                                    персональных данных, в соответствии с <br />
                                    политикой конфиденциальности*
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
