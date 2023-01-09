import React, { useContext, useState } from "react";
import styles from "../../styles/catalog.module.css";
import { useRouter } from "next/router";
import { OpenCatalog } from "../../pages/_app";

const CatalogCategoryItem = ({
    item,
    setCatalogContent,
    isFirst,
    index,
    open,
}) => {
    const [isOpen, setIsOpen] = useState(isFirst);

    const [openCatalog, setOpenCatalog] = useContext(OpenCatalog);

    return (
        <div className={styles.catalog__menu_item}>
            <p
                className={styles.catalog__menu_title}
                onClick={() => setIsOpen(!isOpen)}
            >
                {item.title}
            </p>
            <ul className={styles.catalog__menu_list}>
                {isOpen &&
                    item.categories.map((category) => {
                        return (
                            <li
                                className={styles.catalog__list_item}
                                key={category.title}
                                onClick={() => {
                                    setCatalogContent({
                                        title: category.title,
                                        text: category.description,
                                        categoryTitle: category.title,
                                    });
                                    setOpenCatalog(index);
                                }}
                            >
                                {category.title}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default CatalogCategoryItem;
