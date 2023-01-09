export const API_URL = process.env.API_URL;

export default class ServicesAPI {
    static async getServicesList() {
        try {
            const response = await fetch(`${API_URL}/services/servicesList`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getServiceContent(slug) {
        try {
            const response = await fetch(
                `${API_URL}/services/servicesList/${slug}`
            );
            const data = await response.json();
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }

    static async getServicesSlider(slug) {
        try {
            const response = await fetch(`${API_URL}/services/servicesSlider`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getCoop(slug) {
        try {
            const response = await fetch(`${API_URL}/services/cooperation`);
            const data = await response.json();
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }
}
