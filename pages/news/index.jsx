import React from "react";
import styles from "../../styles/news.module.css";
import Header from "../../components/Header/Header";
import Delivery from "../../components/Delivery/Delivery";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import NewsAPI from "../../API/NewsAPI";
import Link from "next/link";

const News = ({ newsList }) => {
    return (
        <>
            <Header />
            <div className={styles.news}>
                <div className="container">
                    <p className={styles.news__location}>
                        Главная {">"} Новости
                    </p>
                    <h1 className={styles.news__title}>Новости компании</h1>
                    <div className={styles.news__items}>
                        {newsList.map((news) => {
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
                </div>
            </div>
            <Delivery />
            <Contacts />
            <Footer />
        </>
    );
};

export const getServerSideProps = async () => {
    const newsList = await NewsAPI.getNewsList();

    return {
        props: { newsList },
    };
};

export default News;
