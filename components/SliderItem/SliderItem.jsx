import React, { useState } from "react";
import styles from "../../styles/home.module.css";
import classnames from "classnames";
import Link from "next/link";

const SliderItem = ({ slider }) => {
    const [isOnEnter, setIsOnEnter] = useState(false);

    return (
        <div
            className={classnames({
                [styles.services__slider_item]: true,
            })}
            onMouseEnter={() => setIsOnEnter(true)}
            onMouseLeave={() => setIsOnEnter(false)}
            key={slider.photo}
        >
            <div className={styles.services__slider_img}>
                <img src={slider.photo} alt="" />
            </div>
            {isOnEnter && (
                <Link href={`/services/${slider.serviceSlug}`}>
                    <div className={styles.services__slider_link}>
                        <p>Подробнее</p>
                        <div>
                            <img src="/images/arrow-right.png" alt="" />
                        </div>
                    </div>
                </Link>
            )}
            {!isOnEnter && (
                <div className={styles.services__slider_text}>
                    <p>{slider.title}</p>
                </div>
            )}
        </div>
    );
};

export default SliderItem;
