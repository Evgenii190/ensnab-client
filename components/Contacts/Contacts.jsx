import React from "react";
import styles from "./Contacts.module.css";
import classnames from "classnames";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <a name="contacts"></a>
            <div className={styles.contacts__info}>
                <h3 className={styles.contacts__info_title}>Контакты</h3>
                <div className={styles.contact__item}>
                    <div>
                        <img src="/images/place_contact.png" alt="" />
                    </div>
                    <p>
                        Свердловская область, <br /> Каменск-Уральский, ул.
                        Октябрьская 21 <br />
                        56.379307, 61.957039
                    </p>
                </div>
                <div
                    className={classnames(
                        styles.contact__item,
                        styles.contact__item_bold
                    )}
                >
                    <div>
                        <img src="/images/tel_contact.png" alt="" />
                    </div>
                    <p>
                        <span>+7 (912) 685-20-36</span>
                    </p>
                </div>
                <div className={styles.contact__item}>
                    <div>
                        <img src="/images/mail_contact.png" alt="" />
                    </div>
                    <p>Ensnab@yandex.ru</p>
                </div>
                <div
                    className={classnames(
                        styles.contact__item,
                        styles.contact__item_bold
                    )}
                >
                    <div>
                        <img src="/images/clock_contact.png" alt="" />
                    </div>
                    <p>
                        Часы работы: <span> Пн - Пт 08 : 00 - 18 : 00</span>
                    </p>
                </div>
            </div>
            <iframe
                className={styles.contacts__map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.129828933832!2d61.95413141610656!3d56.37934115096187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c6d91367396b73%3A0x822ee043da391699!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDRg9C7LiwgMjEsINCa0LDQvNC10L3RgdC6LdCj0YDQsNC70YzRgdC60LjQuSwg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMzQwNg!5e0!3m2!1sru!2sru!4v1671386104107!5m2!1sru!2sru"
            ></iframe>
        </div>
    );
};

export default Contacts;
