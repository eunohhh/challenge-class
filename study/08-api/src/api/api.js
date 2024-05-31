import axios from "axios";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

const client = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: "Bearer" },
});

const updateToken = (token) => {
    client.defaults.headers.common.Authorization = token
        ? `Bearer ${token}`
        : "";
};

async function getProduct(productId) {
    const endPoint = `${BASE_URL}/products/${productId}`;
    const response = await fetch(endPoint);
    const result = await response.json();

    return result;
}

async function getBrands() {
    const endPoint = `${BASE_URL}/brands`;
    const response = await fetch(endPoint);
    const result = await response.json();

    return result;
}

export { BASE_URL, client, getBrands, getProduct, updateToken };
