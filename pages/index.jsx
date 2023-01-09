import styles from "../styles/home.module.css";
import Link from "next/link";
import Header from "../components/Header/Header";
import classnames from "classnames";
import ServicesAPI from "../API/ServicesAPI";
import SliderItem from "../components/SliderItem/SliderItem";
import NewsAPI from "../API/NewsAPI";
import Delivery from "../components/Delivery/Delivery";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import CatalogAPI from "../API/CatalogAPI";

export default function Home({ servicesSliders, lastNews, productsView }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1,
        slidesToShow:
            servicesSliders.length < 5 ? servicesSliders.length - 1 : 5,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                    draggable: true,
                },
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    draggable: true,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    draggable: true,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    draggable: true,
                },
            },
        ],
    };

    const [countSlides, setCountSlides] = useState(1);

    const customeSlider = React.createRef();

    const gotoNext = () => {
        setCountSlides(countSlides + 1);
        if (countSlides == servicesSliders.length) {
            setCountSlides(1);
        }

        customeSlider.current.slickNext();
    };

    const gotoPrev = () => {
        setCountSlides(countSlides - 1);
        if (countSlides === 1) {
            setCountSlides(6);
        }
        customeSlider.current.slickPrev();
    };

    return (
        <>
            <div className={styles.intro}>
                <Header />

                <div className={styles.intro__content}>
                    <div className="container">
                        <div className={styles.intro__content_wrap}>
                            <div className={styles.intro__wrap_left}>
                                <h1 className={styles.intro__content_title}>
                                    Производство и поставка, <br />
                                    электротехнической арматуры, <br /> для
                                    высоковольтных линий <br /> электропередач
                                </h1>
                                <div className={styles.intro__content_items}>
                                    <div>
                                        <div
                                            className={
                                                styles.intro__content_item
                                            }
                                        >
                                            <div>
                                                <img
                                                    src="/images/done-intro.png"
                                                    alt=""
                                                />
                                            </div>
                                            <p>
                                                Собственное литейное <br />
                                                производство
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.intro__content_item
                                            }
                                        >
                                            <div>
                                                <img
                                                    src="/images/done-intro.png"
                                                    alt=""
                                                />
                                            </div>
                                            <p>
                                                Скидки и отсрочки <br />
                                                постоянным клиентам
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.intro__content_item}>
                                        <div>
                                            <img
                                                src="/images/done-intro.png"
                                                alt=""
                                            />
                                        </div>
                                        <p>
                                            Собственное литейное <br />
                                            производство
                                        </p>
                                    </div>
                                </div>
                                <Link href="/catalog">
                                    <div className={styles.intro__button}>
                                        <p>Каталог продукции</p>
                                        <div>
                                            <img
                                                src="/images/btn-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.intro__wrap_right}>
                                <div className={styles.intro__right_item}>
                                    <p className={styles.intro__right_title}>
                                        20 лет
                                    </p>
                                    <p className={styles.intro__right_info}>
                                        на рынке <br /> энергоснабжения
                                    </p>
                                </div>
                                <div className={styles.intro__right_item}>
                                    <p className={styles.intro__right_title}>
                                        17504
                                    </p>
                                    <p className={styles.intro__right_info}>
                                        Поставленно тонн <br /> продукции
                                    </p>
                                </div>
                                <div className={styles.intro__right_item}>
                                    <p className={styles.intro__right_title}>
                                        17504
                                    </p>
                                    <p className={styles.intro__right_info}>
                                        Тон поставленно <br /> алюминиевого
                                        сырья
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.catalog}>
                <div className="container">
                    <h3 className={styles.catalog__title}>Каталог продукции</h3>
                    <div className={styles.catalog__items_top}>
                        {productsView.slice(0, 3).map((view) => {
                            return (
                                <div
                                    className={styles.catalog__item}
                                    key={view.photo}
                                >
                                    <h5 className={styles.catalog__item_title}>
                                        {view.source}
                                    </h5>
                                    <p className={styles.catalog__item_info}>
                                        {view.text}
                                    </p>
                                    <div className={styles.catalog__item_btn}>
                                        <Link href="/catalog">
                                            <p>Подробнее</p>
                                        </Link>
                                        <div>
                                            <img
                                                src="/images/btn-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.catalog__item_img}>
                                        <img src={view.photo} alt="" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.catalog__items_bottom}>
                        {productsView.slice(3).map((view) => {
                            return (
                                <div
                                    className={styles.catalog__item_bottom}
                                    key={view.photo}
                                >
                                    <h5 className={styles.catalog__item_title}>
                                        {view.source}
                                    </h5>
                                    <p className={styles.catalog__bottom_text}>
                                        {view.text}
                                    </p>
                                    <div className={styles.catalog__item_btn}>
                                        <Link href="/catalog">
                                            <p>Подробнее</p>
                                        </Link>
                                        <div>
                                            <img
                                                src="/images/btn-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.catalog__bottom_img}>
                                        <img src={view.photo} alt="" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className={styles.guarantees}>
                <div className="container">
                    <h5 className={styles.guarantees__title}>
                        Гарантируем спокойство и уверенность <br /> в качестве и
                        сроках выполнения работ и поставок
                    </h5>
                    <div className={styles.guarantees__items}>
                        <div
                            className={classnames(
                                styles.guarantees__item,
                                styles.guarantees__wrap
                            )}
                        >
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <h5 className={styles.guarantees__item_title}>
                                сертификаты <br /> соответствия
                            </h5>
                            <div className={styles.guarantees__wrap_image}>
                                <div className={styles.guarantees__wrap_img}>
                                    <img src="/images/sec-i1.png" alt="" />
                                </div>
                                <div className={styles.guarantees__wrap}>
                                    <div>
                                        <img src="/images/sec-i3.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="/images/sec-i2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.guarantees__item}>
                            <h5 className={styles.guarantees__item_title}>
                                Оперативно отгружаем <br /> и доставляем <br />
                                продукцию
                            </h5>
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <div
                                className={classnames(
                                    styles.guarantees__item_image,
                                    styles.guarantees__item_i1
                                )}
                            >
                                <img src="/images/sec-i4.png" alt="" />
                            </div>
                            <div
                                className={classnames(
                                    styles.guarantees__item_image,
                                    styles.guarantees__item_i2
                                )}
                            >
                                <img src="/images/sec-i5.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.guarantees__item}>
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <h5 className={styles.guarantees__item_title}>
                                Работы сдаем точно <br /> в срок по договору
                            </h5>
                            <p className={styles.guarantees__item_text}>
                                Рыбатекст используется дизайнерами,
                                проектировщиками и фронтендерами
                            </p>
                            <div
                                className={classnames(
                                    styles.guarantees__item_image,
                                    styles.guarantees__item_i3
                                )}
                            >
                                <img src="/images/sec-i6.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.guarantees__item}>
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <h5 className={styles.guarantees__item_title}>
                                Против демпинга цен и <br /> некачественной
                                работы
                            </h5>
                            <p className={styles.guarantees__item_text}>
                                Рыбатекст используется дизайнерами,
                                проектировщиками и фронтендерами
                            </p>
                            <div className={styles.guarantees__item_i4}>
                                <img src="/images/sec-i7.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.guarantees__item}>
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <h5 className={styles.guarantees__item_title}>
                                Закрепим за вами <br /> персонального <br />{" "}
                                менеджера
                            </h5>
                            <p className={styles.guarantees__item_text}>
                                Рыбатекст используется дизайнерами,
                                проектировщиками и фронтендерами
                            </p>
                            <div className={styles.guarantees__item_i4}>
                                <img src="/images/sec-i8.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.guarantees__item}>
                            <div className={styles.guarantees__item_background}>
                                <img src="/images/g_back.png" alt="" />
                            </div>
                            <h5 className={styles.guarantees__item_title}>
                                Ответственно <br /> выполняем <br />{" "}
                                обязательства <br /> по гарантийному <br />{" "}
                                обслуживанию
                            </h5>
                            <div className={styles.guarantees__item_i4}>
                                <img src="/images/sec-i9.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className="container">
                    <div className={styles.about__wrap}>
                        <div className={styles.about__info}>
                            <h4 className={styles.about__info_title}>
                                О компании “ООО Энергоснаб”
                            </h4>
                            <p className={styles.about__info_text}>
                                Рыбатекст используется дизайнерами,
                                проектировщиками и фронтендерами, когда нужно
                                быстро заполнить макеты или прототипы
                                содержимым. Это тестовый контент, который не
                                должен нести никакого смысла, лишь показать
                                наличие самого текста или продемонстрировать
                                типографику в деле.
                            </p>
                            <p className={styles.about__info_text}>
                                Рыбатекст используется дизайнерами,
                                проектировщиками и фронтендерами, когда нужно
                                быстро заполнить макеты или прототипы
                                содержимым. Это тестовый контент
                            </p>
                            <div className={styles.about__items}>
                                <div className={styles.about__item}>
                                    <h5 className={styles.about__item_title}>
                                        20 лет
                                    </h5>
                                    <p className={styles.about__item_text}>
                                        На рынке <br /> энергоснабжения
                                    </p>
                                </div>
                                <div className={styles.about__item}>
                                    <h5 className={styles.about__item_title}>
                                        17504
                                    </h5>
                                    <p className={styles.about__item_text}>
                                        На рынке <br /> энергоснабжения
                                    </p>
                                </div>
                                <div className={styles.about__item}>
                                    <h5 className={styles.about__item_title}>
                                        10000
                                    </h5>
                                    <p className={styles.about__item_text}>
                                        На рынке <br /> энергоснабжения
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about__images}>
                            <div>
                                <img src="/images/about-i1.png" alt="" />
                            </div>
                            <div className={styles.about__images_wrap}>
                                <div>
                                    <img src="/images/about-i2.png" alt="" />
                                </div>
                                <div>
                                    <img src="/images/about-i3.png" alt="" />
                                </div>
                                <div>
                                    <img src="/images/about-i4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.services__slider}>
                <div className="container">
                    <div className={styles.services__slider_wrap}>
                        <h5 className={styles.services__slider_title}>
                            Сопутствующие услуги ”Энергоснаб”
                        </h5>
                        <div className={styles.services__slider_count}>
                            <p>
                                <span>{countSlides}</span>/
                                {servicesSliders.length}
                            </p>
                            <button
                                className={classnames(
                                    styles.services__slider_btn,
                                    styles.services__slider_btn__border
                                )}
                                onClick={() => gotoPrev()}
                            >
                                <img src="/images/arrow-left.png" alt="" />
                            </button>
                            <button
                                className={styles.services__slider_btn}
                                onClick={() => gotoNext()}
                            >
                                <img src="/images/arrow-right.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.services__slider_items}>
                        <Slider {...settings} ref={customeSlider}>
                            {servicesSliders.map((slider) => {
                                return (
                                    <SliderItem
                                        slider={slider}
                                        key={slider.photo}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className={styles.certificates}>
                <div className="container">
                    <div className={styles.certificates__wrap}>
                        <div className={styles.certificates__info}>
                            <h5 className={styles.certificates__info_title}>
                                Вся продукция имеет <br /> сертификаты качества
                            </h5>
                            <p>
                                Cоответствует государственным <br /> стандартам
                                Гост, ТУ и ОСТ
                            </p>
                        </div>
                        <div className={styles.certificates__images}>
                            <div>
                                <img src="/images/certificates.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/certificates.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.news}>
                <div className="container">
                    <h1 className={styles.news__title}>Новости компании</h1>
                    <div className={styles.news__items}>
                        {lastNews.map((news) => {
                            return (
                                <div
                                    className={styles.news__item}
                                    key={news.photo}
                                >
                                    <div className={styles.news__item_img}>
                                        <img src={news.photo} alt="" />
                                    </div>
                                    <div className={styles.news__item_title}>
                                        <h2>{news.title}</h2>
                                    </div>
                                    <p className={styles.news__item_text}>
                                        {news.content}
                                    </p>
                                    <div className={styles.news__item_btn}>
                                        <Link href={`/news/${news.slug}`}>
                                            <p>Читать подробнее</p>
                                        </Link>
                                        <div>
                                            <img
                                                src="/images/arrow-right.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.news__button_outer}>
                        <Link href="/news">
                            <div className={styles.news__button}>
                                <p>Все новости</p>
                                <div>
                                    <img src="/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <Delivery />
            <Contacts />
            <Footer />
        </>
    );
}

export const getServerSideProps = async () => {
    const servicesSliders = await ServicesAPI.getServicesSlider();
    const lastNews = await NewsAPI.getLastNews();
    const productsView = await CatalogAPI.getCatalogProducts();

    return {
        props: {
            servicesSliders: servicesSliders || {},
            lastNews: lastNews || {},
            productsView: productsView || {},
        },
    };
};
