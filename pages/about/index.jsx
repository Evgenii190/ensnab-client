import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "../../styles/about.module.css";
import Delivery from "../../components/Delivery/Delivery";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";

const AboutPage = () => {
    const [activeScope, setActiveScope] = useState(1);

    return (
        <>
            <div className={styles.about}>
                <Header />
                <div className="container">
                    <div className={styles.about__wrap}>
                        <div className={styles.about__info}>
                            <h1>
                                Более 10 Лет специализируемся на <br />
                                производстве и сбыте продукции <br /> для линий
                                энергоснабжения
                            </h1>
                            <div className={styles.about__info_items}>
                                <div className={styles.about__info_item}>
                                    <div>
                                        <img
                                            src="/images/done-intro.png"
                                            alt=""
                                        />
                                    </div>
                                    <p>
                                        Приемлемые цены за счет <br />
                                        собственного производства
                                    </p>
                                </div>
                                <div className={styles.about__info_item}>
                                    <div>
                                        <img
                                            src="/images/done-intro.png"
                                            alt=""
                                        />
                                    </div>
                                    <p>
                                        Собственное литейное <br /> производство
                                    </p>
                                </div>
                                <div className={styles.about__info_item}>
                                    <div>
                                        <img
                                            src="/images/done-intro.png"
                                            alt=""
                                        />
                                    </div>
                                    <p>
                                        Склад с готовой <br /> продукцией
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about__items}>
                            <div className={styles.about__item}>
                                <h4>20 лет </h4>
                                <p>
                                    на рынке <br /> энергоснабжения
                                </p>
                            </div>
                            <div className={styles.about__item}>
                                <h4>17504 </h4>
                                <p>
                                    Поставленно тонн <br />
                                    продукции
                                </p>
                            </div>
                            <div className={styles.about__item}>
                                <h4>16000</h4>
                                <p>
                                    Поставок для <br /> комплектакции <br />
                                    энергетических <br />
                                    объектов
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.about__content}>
                <div className="container">
                    <h3 className={styles.about__content_title}>
                        Разнообразие производственной деятельности
                    </h3>
                    <p className={styles.about__content_text}>
                        Мы осуществляем производство металлоконструкций на
                        заказ. Крой, монтаж, резка и сварка ручным и
                        автоматизированным методами позволяют нам изготавливать
                        металлические конструкции самого разного типа и
                        назначения.
                    </p>
                    <p className={styles.about__content_text}>
                        Среди них опоры освещения, дорожные ограждения,
                        различные резервуары, молниеотводы, каркасы зданий и
                        многое другое.
                    </p>
                    <p className={styles.about__content_text}>
                        Наши возможности на этом не ограничиваются. Мы
                        занимаемся такими видами деятельности, как:
                    </p>
                    <ul className={styles.about__content_list}>
                        <li>
                            Производство отливок из самых разных металлов с
                            помощью форм, выполненных по чертежам клиента;
                        </li>
                        <li>
                            Штамповка поковок на автоматическом оборудовании;
                        </li>
                        <li>
                            Изготовление перфорированных панелей партиями
                            разного размера, от массовых до малочисленных;{" "}
                        </li>
                        <li>И многое другое.</li>
                    </ul>

                    <h3 className={styles.about__content_title}>
                        Технологический процесс
                    </h3>
                    <p className={styles.about__content_text}>
                        Производство состоит из нескольких этапов. Все
                        начинается с разработки чертежей, если их нет, и подбора
                        оптимальных технологий выполнения. После этого
                        осуществляется первичная обработка сырья и получение из
                        них заготовок. Следующим этапом заготовки подвергаются
                        обработке различными способами вручную или на станках, а
                        после - финальной доработке до товарного вида. Таким
                        образом, потребителю в руки попадает уже готовая
                        качественная продукция, изготовленная с соблюдением всех
                        государственных стандартов.
                    </p>
                    <p className={styles.about__content_text}>
                        Наша компания проводит контроль качества на всех этапах
                        производства. Мы гарантируем высокую скорость выполнения
                        заказа и соблюдение всех правил хранения и
                        транспортировки. За нашими плечами более 17 лет опыта
                        изготовления металлопроката, поэтому наша компания
                        успешно справляется с заказом любого размера и
                        сложности.
                    </p>
                </div>
            </section>
            <section className={styles.about__using}>
                <div className="container">
                    <h5 className={styles.about__using_title}>
                        Нашей продукцией пользуются <br /> крупнейшие
                        государственные компании
                    </h5>
                    <div className={styles.about__using_items}>
                        <div className={styles.about__using_item}>
                            <img src="/images/about1.png" alt="" />
                        </div>
                        <div className={styles.about__using_item}>
                            <img src="/images/about2.png" alt="" />
                        </div>
                        <div className={styles.about__using_item}>
                            <img src="/images/about3.png" alt="" />
                        </div>
                        <div className={styles.about__using_item}>
                            <img src="/images/about4.png" alt="" />
                        </div>
                        <div className={styles.about__using_item}>
                            <img src="/images/about5.png" alt="" />
                        </div>
                        <div className={styles.about__using_item}>
                            <img src="/images/about6.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about__scope}>
                <div className="container">
                    <h4 className={styles.about__scope_title}>
                        Возможности нашего производства
                    </h4>
                    <div className={styles.about__scope_items}>
                        {[
                            "Металлоконструкции",
                            "Литейное производство",
                            "Механическая обработка",
                        ].map((item, index) => {
                            return (
                                <div
                                    className={classNames({
                                        [styles.about__scope_item]: true,
                                        [styles.about__scope_item__active]:
                                            activeScope === index + 1,
                                    })}
                                    onClick={() => setActiveScope(index + 1)}
                                    key={item}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.about__scope_wrap}>
                        {activeScope === 1 && (
                            <>
                                <div className={styles.about__scope_img}>
                                    <img src="/images/about7.png" alt="" />
                                </div>
                                <div className={styles.about__scope_info}>
                                    <h5>Производство металлоконструкций</h5>
                                    <p>
                                        Мы осуществляем производство
                                        металлоконструкций на заказ. Крой,
                                        монтаж, резка и сварка ручным и
                                        автоматизированным методами позволяют
                                        нам изготавливать металлические
                                        конструкции самого разного типа и
                                        назначения.
                                    </p>
                                    <p>
                                        Среди них опоры освещения, дорожные
                                        ограждения, различные резервуары,
                                        молниеотводы, каркасы зданий и многое
                                        другое.
                                    </p>
                                    <div className={styles.about__scope_btn}>
                                        <p>Оставить заявку</p>
                                        <div>
                                            <img
                                                src="/images/arrow-right.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeScope === 2 && (
                            <>
                                <div className={styles.about__scope_img}>
                                    <img src="/images/about7.png" alt="" />
                                </div>
                                <div className={styles.about__scope_info}>
                                    <h5>Литейное производство</h5>
                                    <p>
                                        Мы осуществляем производство
                                        металлоконструкций на заказ. Крой,
                                        монтаж, резка и сварка ручным и
                                        автоматизированным методами позволяют
                                        нам изготавливать металлические
                                        конструкции самого разного типа и
                                        назначения.
                                    </p>
                                    <p>
                                        Среди них опоры освещения, дорожные
                                        ограждения, различные резервуары,
                                        молниеотводы, каркасы зданий и многое
                                        другое.
                                    </p>
                                    <div className={styles.about__scope_btn}>
                                        <p>Оставить заявку</p>
                                        <div>
                                            <img
                                                src="/images/arrow-right.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeScope === 3 && (
                            <>
                                <div className={styles.about__scope_img}>
                                    <img src="/images/about7.png" alt="" />
                                </div>
                                <div className={styles.about__scope_info}>
                                    <h5>Механическая обработка</h5>
                                    <p>
                                        Мы осуществляем производство
                                        металлоконструкций на заказ. Крой,
                                        монтаж, резка и сварка ручным и
                                        автоматизированным методами позволяют
                                        нам изготавливать металлические
                                        конструкции самого разного типа и
                                        назначения.
                                    </p>
                                    <p>
                                        Среди них опоры освещения, дорожные
                                        ограждения, различные резервуары,
                                        молниеотводы, каркасы зданий и многое
                                        другое.
                                    </p>
                                    <div className={styles.about__scope_btn}>
                                        <p>Оставить заявку</p>
                                        <div>
                                            <img
                                                src="/images/arrow-right.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Delivery />
            <Contacts />
            <Footer />
        </>
    );
};

export default AboutPage;
