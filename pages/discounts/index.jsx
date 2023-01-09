import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import styles from "../../styles/discounts.module.css";
import CatalogAPI from "../../API/CatalogAPI";
import ProductsItem from "../../components/ProductItem/ProductItem";

const Discounts = ({ discountsList }) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.discounts__wrap}>
                    <div className={styles.discounts__link}>
                        Главная {">"} Акции
                    </div>
                    <h2 className={styles.discounts__title}>Акции</h2>
                    <div className={styles.discounts__items}>
                        {discountsList.map((item) => {
                            return (
                                <ProductsItem
                                    key={item.photo}
                                    slug={item.slug}
                                    text={item.text}
                                    title={item.title}
                                    photo={"/media/" + item.photo}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Delivery />
            <Footer />
        </>
    );
};

export const getServerSideProps = async () => {
    const discountsList = await CatalogAPI.getDiscounts();

    return {
        props: { discountsList },
    };
};

export default Discounts;
