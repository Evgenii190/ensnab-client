import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import classnames from "classnames";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <div className="container">
                {isOpenModal && (
                    <ConsultationModal setIsOpen={setIsOpenModal} />
                )}
                <div className={styles.header}>
                    <div className={styles.header__top}>
                        <div className={styles.header__top_left}>
                            <div className={styles.header__logo_mobile}>
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <p className={styles.header__top_text}>
                                Производство и поставка, электротехнической
                                <br />
                                арматуры, для высоковольтных линий передач
                            </p>
                        </div>
                        <div className={styles.header__top_right}>
                            <div className={styles.header__top_links}>
                                <p className={styles.header__top_text}>
                                    <Link href="/payment">Оплата</Link>
                                </p>
                                <p className={styles.header__top_text}>
                                    <Link href="/delivery">Доставка</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <div className="container">
                    <div className={styles.header__bottom_wrap}>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/">Главная</Link>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/catalog">Каталог</Link>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/services">Услуги</Link>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/discounts">Акции</Link>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/about">о компании</Link>
                            </p>
                        </div>
                        <div
                            className={classnames(
                                styles.header__wrap_item,
                                styles.header__item_logo
                            )}
                        >
                            <Link href="/">
                                <div className={styles.header__top_logo}>
                                    <img src="/images/logo.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <a href="">Сотрудничество</a>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <Link href="/news">Новости</Link>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p className={styles.header__scroll_item}>
                                <LinkScroll
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                >
                                    Контакты
                                </LinkScroll>
                            </p>
                        </div>
                        <div className={styles.header__wrap_item}>
                            <p>
                                <span onClick={() => setIsOpenModal(true)}>
                                    Заказать звонок
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.footer_secq}>
                    <div>
                        <Link
                            target="_blank"
                            href={"http://axis-marketing.ru/"}
                        >
                            <p> Сайт разработан агенством AXIS</p>
                        </Link>
                    </div>
                    <div className={styles.footer_secq_wrap}>
                        <p>Пользовательское соглашение</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
