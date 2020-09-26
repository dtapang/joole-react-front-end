import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8070/product/';

//service for accessing data
class ProductService {
    getAllProducts() {
        return axios.get(API_URL + 'list', { headers: authHeader() });
    }

    getProductCategories() {
        return axios.get(API_URL + 'category', { headers: authHeader() });
    }

    getProductsByCategory(categoryStr) {
        return axios.get(API_URL + `category/${categoryStr}`, { headers: authHeader() });
    }

    getProductsByCategory(categoryStr, queryStr) {
        return axios.get(API_URL + `category/${categoryStr}/${queryStr}`, { headers: authHeader() });
    }

    getProductById(productId) {
        return axios.get(API_URL + `/find/${productId}`, { headers: authHeader() });
    }
}

export default new ProductService();
