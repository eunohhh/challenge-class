import { client } from "./api";

async function getBrands() {
    const endPoint = `/brands`;
    const response = await client.get(endPoint);
    const data = response.data;

    return data;
}

export { getBrands };
