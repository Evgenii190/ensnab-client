import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import CatalogAPI from "../../API/CatalogAPI";
import CatalogCategoryItem from "../../components/CatalogCategoryItem/CatalogCategoryItem";
import ConsultationModal from "../../components/ConsultationModal/ConsultationModal";
import Contacts from "../../components/Contacts/Contacts";
import Delivery from "../../components/Delivery/Delivery";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsItem from "../../components/ProductItem/ProductItem";
import styles from "../../styles/catalog.module.css";
import { Context, OpenCatalog } from "../_app";

const Catalog = ({ catalogList, productsList }) => {
    const catalogInit = catalogList[0].categories[0];

    const [products, setProducts] = useState(productsList);

    const [catalogContent, setCatalogContent] = useState({
        title: catalogInit.title,
        text: catalogInit.description,
        categoryTitle: catalogInit.title,
    });

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [basketProducts, setBasketProducts, addBasketProduct] =
        useContext(Context);

    useEffect(() => {
        async function getProducts() {
            const productsData = await CatalogAPI.getProductsByTitle(
                catalogContent.categoryTitle
            );

            setProducts(productsData);
        }

        getProducts();
    }, [catalogContent]);

    const [openCatalog, setOpenCatalog] = useContext(OpenCatalog);

    return (
        <>
            <div className={styles.catalog}>
                <Header />
                {isOpenModal && (
                    <ConsultationModal setIsOpen={setIsOpenModal} />
                )}
                <div className="container">
                    <div className={styles.catalog__inner}>
                        <div className={styles.catalog__menu}>
                            <div className={styles.catalog__title}>
                                <p>Каталог</p>
                                <div>
                                    <img src="/images/arrow_down.png" alt="" />
                                </div>
                            </div>
                            {catalogList.map((item, index) => {
                                return (
                                    <CatalogCategoryItem
                                        item={item}
                                        key={item.title}
                                        setCatalogContent={setCatalogContent}
                                        isFirst={index === 0 ? true : false}
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.catalog__info}>
                            {catalogContent.title && (
                                <p className={styles.catalog__link}>
                                    <Link href="/">Главная</Link> {">"}{" "}
                                    <Link href="/catalog">Каталог</Link> {"> "}
                                    {catalogContent.title}
                                </p>
                            )}

                            <h3 className={styles.catalog__info_title}>
                                {catalogContent.title}
                            </h3>
                            <p className={styles.catalog__info_text}>
                                {catalogContent.text}
                            </p>
                            <div className={styles.catalog__items}>
                                {products.map((product) => {
                                    return (
                                        <ProductsItem
                                            setIsOpenModal={setIsOpenModal}
                                            title={product.title}
                                            addBasketProduct={addBasketProduct}
                                            key={product.title}
                                            photo={product.photo}
                                            characteristics={
                                                product.characteristics
                                            }
                                            slug={product.slug}
                                        />
                                    );
                                })}
                            </div>
                        </div>
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
    const catalogList = await CatalogAPI.getCatalogList();
    const initCategory = catalogList[0].categories[0].title;

    const productsList = await CatalogAPI.getProductsByTitle(initCategory);

    return {
        props: { catalogList, productsList },
    };
};

export default Catalog;
