import Link from "next/link";
import React, { useContext, useState } from "react";
import CatalogAPI from "../../API/CatalogAPI";
import CatalogCategoryItem from "../../components/CatalogCategoryItem/CatalogCategoryItem";
import ConsultationModal from "../../components/ConsultationModal/ConsultationModal";
import Contacts from "../../components/Contacts/Contacts";
import Delivery from "../../components/Delivery/Delivery";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsItem from "../../components/ProductItem/ProductItem";
import styles from "../../styles/catalog.module.css";
import { Context } from "../_app";

const CatalogProduct = ({ catalogList, product, similarProducts }) => {
    const [isMore, setIsMore] = useState(false);

    const similarProductsFiltered = similarProducts.filter(
        (item) => item.id !== product.id
    );

    const [basketProducts, setBasketProducts, addBasketProduct] =
        useContext(Context);

    const descriptionPart1 = product.description.substring(0, 530);
    const descriptionPart2 = product.description.substring(530);

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <div className={styles.catalog}>
                {isOpenModal && (
                    <ConsultationModal setIsOpen={setIsOpenModal} />
                )}
                <Header />
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
                                return <CatalogCategoryItem item={item} />;
                            })}
                        </div>
                        <div className={styles.catalog__info}>
                            {product.title && (
                                <p className={styles.catalog__link}>
                                    <Link href="/">Главная</Link> {">"}{" "}
                                    <Link href="/catalog">Каталог</Link> {"> "}
                                    {product.title}
                                </p>
                            )}

                            <h3 className={styles.catalog__info_title}>
                                {product.title}
                            </h3>
                            <div className={styles.catalog__product_wrap}>
                                <div className={styles.catalog__product_img}>
                                    <img
                                        src={
                                            process.env.BASE_URL + product.photo
                                        }
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={
                                        styles.catalog__product_description
                                    }
                                >
                                    <h4>Описание</h4>
                                    <p>
                                        {product.description.length > 530
                                            ? descriptionPart1
                                            : product.description}
                                        <span>
                                            {isMore && descriptionPart2}
                                        </span>
                                    </p>

                                    {product.description.length > 530 && (
                                        <div
                                            className={
                                                styles.catalog__product_more
                                            }
                                        >
                                            <div>
                                                <span
                                                    onClick={() =>
                                                        setIsMore(!isMore)
                                                    }
                                                >
                                                    Подробнее
                                                </span>
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/arrow_down.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div
                                        className={styles.catalog__item_buttons}
                                    >
                                        <div
                                            className={styles.catalog__item_buy}
                                        >
                                            <p
                                                onClick={() =>
                                                    addBasketProduct({
                                                        title: product.title,
                                                        characteristics:
                                                            product.characteristics,
                                                        slug: product.slug,
                                                        photo: product.photo,
                                                        count: 1,
                                                    })
                                                }
                                            >
                                                В корзину
                                            </p>
                                            <div>
                                                <img
                                                    src="/images/catalog_buy.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className={styles.catalog__item_req}
                                            onClick={() => setIsOpenModal(true)}
                                        >
                                            Запросить цену
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.products__drawing}>
                                {product.drawing.map((drawing) => {
                                    return (
                                        <div key={drawing.photo}>
                                            <img
                                                src={
                                                    process.env.BASE_URL +
                                                    drawing.photo
                                                }
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.products__similar}>
                                <div className="container">
                                    {similarProductsFiltered.length > 0 && (
                                        <h4
                                            className={
                                                styles.products__similar_title
                                            }
                                        >
                                            Похожие товары
                                        </h4>
                                    )}

                                    {similarProductsFiltered.map((product) => {
                                        return (
                                            <ProductsItem
                                                title={product.title}
                                                text={product.text}
                                                characteristics={
                                                    product.characteristics
                                                }
                                                photo={product.photo}
                                                slug={product.slug}
                                                key={product.photo}
                                            />
                                        );
                                    })}
                                </div>
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

export const getServerSideProps = async ({ params }) => {
    const catalogList = await CatalogAPI.getCatalogList();
    const initCategory = catalogList[0].categories[0].title;

    const productsList = await CatalogAPI.getProductsByTitle(initCategory);
    const product = await CatalogAPI.getProductsBySlug(params.slug);

    const similarProducts = await CatalogAPI.getProductsByTitle(
        product.category
    );

    return {
        props: { product, productsList, catalogList, similarProducts },
    };
};

export default CatalogProduct;
