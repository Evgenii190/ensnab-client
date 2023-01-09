export const API_URL = process.env.API_URL;

export default class CatalogAPI {
    static async getCatalogList() {
        try {
            const response = await fetch(`${API_URL}/catalog/catalogList`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async createRequest(reqData) {
        try {
            const response = await fetch(`${API_URL}/catalog/request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async createRequestConsultation(reqData) {
        try {
            const response = await fetch(
                `${API_URL}/catalog/requestConsultation`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(reqData),
                }
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getCatalogProducts() {
        try {
            const response = await fetch(`${API_URL}/catalog/catalogProducts`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getProductsByTitle(title) {
        try {
            const response = await fetch(
                `${API_URL}/catalog/products/${title}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getProductsBySlug(slug) {
        try {
            const response = await fetch(`${API_URL}/catalog/product/${slug}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getDiscounts() {
        try {
            const response = await fetch(`${API_URL}/catalog/discounts/`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
