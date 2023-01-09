export const API_URL = process.env.API_URL;

export default class NewsAPI {
    static async getNewsList() {
        try {
            const response = await fetch(`${API_URL}/news/newsList`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getNewsContent(slug) {
        try {
            const response = await fetch(`${API_URL}/news/newsList/${slug}`);
            const data = await response.json();
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }

    static async getLastNews() {
        try {
            const response = await fetch(`${API_URL}/news/lastNews`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
