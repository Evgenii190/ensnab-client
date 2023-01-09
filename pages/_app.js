import MainLayout from "../layouts/MainLayout";
import "../styles/globals.css";
import { createContext, useState } from "react";

export const Context = createContext("provider");
export const OpenCatalog = createContext("provider");

function MyApp({ Component, pageProps }) {
    const [productsBasket, setProductsBasket] = useState([]);
    const [openCatalog, setOpenCatalog] = useState(null);

    const addBasketProduct = (data) => {
        const is = productsBasket.find((el) => el.slug === data.slug);
        if (!is) {
            setProductsBasket([...productsBasket, data]);
        }
    };

    return (
        <Context.Provider
            value={[productsBasket, setProductsBasket, addBasketProduct]}
        >
            <OpenCatalog.Provider value={[openCatalog, setOpenCatalog]}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </OpenCatalog.Provider>
        </Context.Provider>
    );
}

export default MyApp;
