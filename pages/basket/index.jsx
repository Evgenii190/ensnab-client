import React, { useContext, useState } from "react";
import Contacts from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/basket.module.css";
import { Context } from "../_app";
import Link from "next/link";
import CatalogAPI from "../../API/CatalogAPI";

const Basket = () => {
    const [basketProducts, setBasketProducts, addBasketProduct] =
        useContext(Context);

    const deleteProductBasket = (slug) => {
        const basketProductsFiltered = basketProducts.filter(
            (item) => item.slug !== slug
        );

        setBasketProducts(basketProductsFiltered);
    };

    const addProductCount = (slug) => {
        const newBasketProducts = basketProducts.map((item) =>
            item.slug === slug ? (item.count++, item) : item
        );

        setBasketProducts(newBasketProducts);
    };

    const removeProductCount = (slug) => {
        const newBasketProducts = basketProducts.map((item) =>
            item.slug === slug && item.count > 1
                ? (item.count-- < 0, item)
                : item
        );

        setBasketProducts(newBasketProducts);
    };

    const modifyBasketProducts = () => {
        let str = "";
        basketProducts.map((item) => {
            str +=
                " Название продукта: " +
                item.title +
                ", количество: " +
                item.count +
                `, Ссылка на сайте: ${process.env.BASE_URL}/catalog/` +
                item.slug +
                "\n";
        });
        return str;
    };

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [inn, setInn] = useState("");

    const requestMessageHandeler = () => {
        if (!phone || !address || !name || !inn) {
            alert("Пожалуйста заполните форму");
        } else {
            const products = modifyBasketProducts();
            CatalogAPI.createRequest({
                name,
                address,
                comment,
                phone,
                inn,
                products,
            });
            setBasketProducts([]);
            setName("");
            setPhone("");
            setInn("");
            setComment("");
            setAddress("");
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.basket__wrap}>
                    <p className={styles.basket__location}>
                        Главная {">"} Корзина
                    </p>
                    <h4 className={styles.basket__count}>
                        {basketProducts.length} товара в корзине
                    </h4>
                    <div className={styles.bakset__flex}>
                        <div className={styles.basket__items}>
                            {basketProducts.map((item) => {
                                return (
                                    <div
                                        className={styles.basket__item}
                                        key={item.photo}
                                    >
                                        <Link href={`/catalog/${item.slug}`}>
                                            <div
                                                className={
                                                    styles.basket__item_img
                                                }
                                            >
                                                <img
                                                    src={
                                                        process.env.BASE_URL +
                                                        item.photo
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div
                                            className={styles.basket__item_info}
                                        >
                                            <Link
                                                href={`/catalog/${item.slug}`}
                                            >
                                                <h3
                                                    className={
                                                        styles.basket__item_title
                                                    }
                                                >
                                                    {item.title}
                                                </h3>
                                            </Link>
                                            <div
                                                className={
                                                    styles.basket__characteristics
                                                }
                                            >
                                                {item.characteristics.map(
                                                    ({
                                                        сharacteristic,
                                                        value,
                                                    }) => {
                                                        return (
                                                            <div
                                                                className={
                                                                    styles.basket__characteristic
                                                                }
                                                                key={
                                                                    сharacteristic +
                                                                    value
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.basket__characteristic_left
                                                                    }
                                                                >
                                                                    {сharacteristic +
                                                                        ":"}
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.basket__characteristic_right
                                                                    }
                                                                >
                                                                    {value}
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                            <div
                                                className={
                                                    styles.basket__counter
                                                }
                                            >
                                                <p>Количество</p>
                                                <div>
                                                    <span
                                                        onClick={() =>
                                                            removeProductCount(
                                                                item.slug
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </span>
                                                    <span>{item.count}</span>
                                                    <span
                                                        onClick={() =>
                                                            addProductCount(
                                                                item.slug
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                                <img
                                                    src="/images/basket.png"
                                                    alt=""
                                                    onClick={() =>
                                                        deleteProductBasket(
                                                            item.slug
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.basket__form}>
                            <h3 className={styles.basket__form_title}>
                                Введите контактные данные чтобы получить точный
                                рассчет стоимости
                            </h3>
                            <p className={styles.basket__form_text}>
                                В течение 10 минут наш менеджер обратает заявку
                                и вышлет вам точный рассчет стоимости по вашему
                                запросу
                            </p>
                            <input
                                type="text"
                                className={styles.basket__input}
                                placeholder="Ф.И.О"
                                onChange={(e) => setName(e.currentTarget.value)}
                                required
                                value={name}
                            />
                            <input
                                type="text"
                                className={styles.basket__input}
                                placeholder="Телефон"
                                onChange={(e) =>
                                    setPhone(e.currentTarget.value)
                                }
                                required
                                value={phone}
                                min={10}
                            />
                            <input
                                type="text"
                                className={styles.basket__input}
                                value={inn}
                                placeholder="ИНН организации"
                                required
                                onChange={(e) => setInn(e.currentTarget.value)}
                            />
                            <input
                                type="text"
                                value={address}
                                className={styles.basket__input}
                                placeholder="Адрес доставки"
                                onChange={(e) =>
                                    setAddress(e.currentTarget.value)
                                }
                                required
                            />
                            <input
                                type="text"
                                className={styles.basket__input}
                                placeholder="Коментарий к заказу"
                                value={comment}
                                onChange={(e) =>
                                    setComment(e.currentTarget.value)
                                }
                                required
                            />
                            <div
                                className={styles.basket__btn}
                                onClick={() => requestMessageHandeler()}
                            >
                                <p>Запросить стоимость</p>
                                <div>
                                    <img src="/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </>
    );
};

export default Basket;
