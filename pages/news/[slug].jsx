import Link from "next/link";
import React from "react";
import NewsAPI from "../../API/NewsAPI";
import Header from "../../components/Header/Header";
import styles from "../../styles/news.module.css";

const NewsContent = ({ newsContent }) => {
    function createMarkup() {
        return { __html: newsContent.content };
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.news__wrap_inner}>
                    <p className={styles.news__location}>
                        <Link href="/">Главная</Link> {">"}{" "}
                        <Link href="/news">Новости</Link> {">"}{" "}
                        {newsContent.title}
                    </p>
                    <h1 className={styles.news__content_title}>
                        {newsContent.title}
                    </h1>
                    <div
                        className={styles.news__main_content}
                        dangerouslySetInnerHTML={createMarkup()}
                    ></div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const newsContent = await NewsAPI.getNewsContent(params.slug);

    return {
        props: { newsContent: newsContent || {} },
    };
};

export default NewsContent;
