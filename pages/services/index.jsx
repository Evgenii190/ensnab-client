import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/services.module.css";
import Header from "../../components/Header/Header";
import Delivery from "../../components/Delivery/Delivery";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import ServicesAPI from "../../API/ServicesAPI";
import classNames from "classnames";

const Services = ({ servicesList }) => {
    const [services, setServices] = useState(servicesList);
    const [currentService, setCurrentService] = useState(servicesList[0]);
    const [activeService, setActiveService] = useState(0);

    const setCurrentServiceHandeler = (index) => {
        setActiveService(index);
        setCurrentService(services[index]);
    };

    return (
        <>
            <div className={styles.services}>
                <Header />
                <div className="container">
                    <div className={styles.services__wrap}>
                        <div className={styles.services__left}>
                            <h1 className={styles.services__title}>
                                Дополнительные услуги <br /> производства
                                “Энергоснаб”
                            </h1>
                            <div className={styles.services__info}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>
                                    Услуги в любых объемах <br /> и в
                                    минимальные сроки
                                </p>
                            </div>
                            <div className={styles.services__info}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>
                                    Предоставляем соответствующие <br />{" "}
                                    сертификаты и документы
                                </p>
                            </div>
                            <div className={styles.services__info}>
                                <div>
                                    <img src="/images/done-intro.png" alt="" />
                                </div>
                                <p>
                                    Отсрочка платежа <br /> постоянным клиентам
                                </p>
                            </div>
                            <div className={styles.services__button}>
                                <p>Список услуг</p>
                                <div>
                                    <img src="/images/btn-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.services__right}>
                            <div className={styles.services__right_item}>
                                <div className={styles.services__right_img}>
                                    <img
                                        src="/images/services_dec1.png"
                                        alt=""
                                    />
                                </div>
                                <p>Обработка металла</p>
                            </div>
                            <div className={styles.services__right_item}>
                                <div className={styles.services__right_img}>
                                    <img
                                        src="/images/services_dec2.png"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Производство <br /> металлоконструкций
                                </p>
                            </div>
                            <div className={styles.services__right_item}>
                                <div className={styles.services__right_img}>
                                    <img
                                        src="/images/services_dec3.png"
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Литейное <br /> производство
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.services__catalog}>
                <div className="container">
                    <div className={styles.services__catalog_wrap}>
                        <div className={styles.catalog__menu}>
                            <div className={styles.catalog__title}>
                                <p>Каталог услуг</p>
                                <div>
                                    <img src="/images/arrow_down.png" alt="" />
                                </div>
                            </div>
                            {services.map((service, index) => {
                                return (
                                    <div
                                        className={classNames({
                                            [styles.catalog__menu_item]: true,
                                            [styles.catalog__menu_item__active]:
                                                activeService === index,
                                        })}
                                        key={service.title}
                                        onClick={() =>
                                            setCurrentServiceHandeler(index)
                                        }
                                    >
                                        <p
                                            className={
                                                styles.catalog__menu_title
                                            }
                                        >
                                            {service.title}
                                        </p>
                                        {activeService === index && (
                                            <div>
                                                <img
                                                    src="/images/arrow-right.png"
                                                    alt=""
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <p className={styles.catalog__item_discount}>
                                Акции и скидки
                            </p>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_wrap}>
                                <div className={styles.services__item_img}>
                                    <img src={currentService.photo} alt="" />
                                </div>
                                <div className={styles.services__item_right}>
                                    <h2>{currentService.title}</h2>
                                    <p>{currentService.subContent}</p>
                                    <Link
                                        href={`services/${currentService.slug}`}
                                    >
                                        <div
                                            className={
                                                styles.services__item_btn
                                            }
                                        >
                                            <div>Подробнее</div>

                                            <div>
                                                <img
                                                    src="/images/btn-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <p className={styles.services__item_text}>
                                {currentService.content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Delivery type={true} />
            <Contacts />
            <Footer />
        </>
    );
};

export const getServerSideProps = async () => {
    const servicesList = await ServicesAPI.getServicesList();

    return {
        props: { servicesList },
    };
};

export default Services;
