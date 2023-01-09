import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts/Contacts";
import ServicesAPI from "../../API/ServicesAPI";

const Cooperation = ({ text }) => {
    function createMarkup() {
        return { __html: text.content };
    }

    return (
        <>
            <Header />
            <div className="container">
                <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
            <Contacts />
            <Footer />
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const text = await ServicesAPI.getCoop();

    return {
        props: { text: text || {} },
    };
};

export default Cooperation;
