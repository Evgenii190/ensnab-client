import React from "react";
import ServicesAPI from "../../API/ServicesAPI";
import Header from "../../components/Header/Header";
import styles from "../../styles/services.module.css";
import Link from "next/link";
import Delivery from "../../components/Delivery/Delivery";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

export const BASE_URL = process.env.BASE_URL;

const ServicesItem = ({ serviceContent }) => {
    function createMarkup() {
        return { __html: serviceContent.content };
    }

    return (
        <>
            <Header />
            <div className={styles.container__inner}>
                <div className="container">
                    {Object.keys(serviceContent) != 0 ? (
                        <>
                            {" "}
                            <p className={styles.service__link}>
                                <Link href={"/"}>Главная</Link> {">"}
                                <Link href={"/services"}> Услуги</Link> {">"}
                                {" " + serviceContent.title}
                            </p>
                            <div className={styles.service__content}>
                                <div className={styles.service__content_image}>
                                    <img
                                        src={BASE_URL + serviceContent.photo}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.service__content_info}>
                                    <h1
                                        className={
                                            styles.service__content_title
                                        }
                                    >
                                        {serviceContent.title}
                                    </h1>
                                    <p className={styles.service__content_text}>
                                        {serviceContent.subContent}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles.service__main_content}
                                dangerouslySetInnerHTML={createMarkup()}
                            ></div>
                        </>
                    ) : (
                        <p className={styles.service__content_title}>
                            Здесь ничего нет... Пожалуйста добавьте контент
                        </p>
                    )}
                </div>
            </div>
            <Delivery type={true} />
            <Contacts />
            <Footer />
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const serviceContent = await ServicesAPI.getServiceContent(params.slug);

    return {
        props: { serviceContent: serviceContent || {} },
    };
};

export default ServicesItem;
