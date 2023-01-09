import React, { useState } from "react";
import CatalogAPI from "../../API/CatalogAPI";
import styles from "./ConsultationModal.module.css";

const ConsultationModal = ({ setIsOpen }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const requestMessageHandeler = () => {
        if (!phone || !name) {
            alert("Пожалуйста заполните форму");
        } else {
            CatalogAPI.createRequestConsultation({
                name,
                phone,
            });
            setName("");
            setPhone("");
            setIsOpen(false);
        }
    };

    return (
        <div
            className={styles.modal__back}
            onClick={(e) =>
                e.target === e.currentTarget ? setIsOpen(false) : null
            }
        >
            <div className={styles.consultation__form}>
                <h3 className={styles.consultation__form_title}>
                    Хотите заказать <br /> консультацию?
                </h3>
                <p className={styles.consultation__form_text}>
                    В течение 10 минут с вами свяжется <br />
                    наш специалист для уточнения деталей
                </p>
                <input
                    className={styles.consultation__input}
                    placeholder="Введите ваше имя"
                    type="text"
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                />
                <input
                    className={styles.consultation__input}
                    placeholder="Введите ваш телефон"
                    type="text"
                    onChange={(e) => setPhone(e.currentTarget.value)}
                    value={phone}
                />
                <div
                    className={styles.consultation__form_button}
                    onClick={() => requestMessageHandeler()}
                >
                    <p>Получить консультацию</p>
                    <div>
                        <img src="/images/arrow-right.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;
