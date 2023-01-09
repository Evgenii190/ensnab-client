import Link from "next/link";
import React from "react";
import styles from "./ProductItem.module.css";

const ProductsItem = ({
    title,
    text,
    characteristics,
    photo,
    slug,
    addBasketProduct,
    setIsOpenModal,
}) => {
    return (
        <div className={styles.catalog_item}>
            <Link
                href={`/catalog/${slug}`}
                className={styles.catalog_item__link}
            >
                <div className={styles.catalog__item_img}>
                    <img src={process.env.BASE_URL + photo} alt="" />
                </div>
            </Link>

            <div className={styles.catalog__item_info}>
                <div className={styles.catalog__item_top}>
                    <h4 className={styles.catalog__item_title}>
                        <Link href={`/catalog/${slug}`}>{title} </Link>
                    </h4>

                    {text && (
                        <p className={styles.catalog__item_text}>{text}</p>
                    )}
                    {characteristics &&
                        characteristics.map((el) => {
                            return (
                                <p
                                    className={
                                        styles.catalog__item_characteristic
                                    }
                                    key={el.value + el.сharacteristic}
                                >
                                    <span>{el.сharacteristic}: </span>
                                    {el.value}
                                </p>
                            );
                        })}
                </div>
                <div className={styles.catalog__item_buttons}>
                    <div
                        className={styles.catalog__item_buy}
                        onClick={() =>
                            addBasketProduct({
                                title,
                                characteristics,
                                slug,
                                photo,
                                count: 1,
                            })
                        }
                    >
                        <p>В корзину</p>
                        <div>
                            <img src="/images/catalog_buy.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.catalog__item_req} onClick={() => setIsOpenModal(true)}>
                        Запросить цену
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;
