import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Delivery from "../../components/Delivery/Delivery";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsItem from "../../components/ProductItem/ProductItem";
import styles from "../../styles/stock.module.css";

const Stock = () => {
    return (
        <>
            <Header />
            <div className={styles.stock}>
                <div className="container">
                    <div className={styles.stock__location}>
                        Главная {">"}
                        Акции
                    </div>
                    <h2 className={styles.stock__title}>Акции</h2>
                    <div className={styles.stock__products}>
                        <ProductsItem
                            title={"Зажим аппаратный А2А 35-Т"}
                            text={
                                "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты "
                            }
                        />
                        <ProductsItem
                            title={"Зажим аппаратный А2А 35-Т"}
                            text={
                                "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты "
                            }
                        />
                        <ProductsItem
                            title={"Зажим аппаратный А2А 35-Т"}
                            text={
                                "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты "
                            }
                        />
                        <ProductsItem
                            title={"Зажим аппаратный А2А 35-Т"}
                            text={
                                "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты "
                            }
                        />
                    </div>
                </div>
            </div>
            <Delivery />
            <Contacts />
            <Footer />
        </>
    );
};

export default Stock;
