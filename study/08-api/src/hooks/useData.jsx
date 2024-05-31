import { useEffect, useState } from "react";
import { dataFetch, dataFetch2 } from "../api/api";

// const GET_PRODUCT_ENDPOINT =
//     "https://api.ballang.yoojinyoung.com/products/9587059";

// const GET_BRANDS_ENDPOINT = "https://api.ballang.yoojinyoung.com/brands";

const useData = () => {
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);

    useEffect(() => {
        dataFetch(9587059).then((d) => setData(d));
        dataFetch2().then((d) => setData2(d));
    }, []);

    return { data, data2 };
};

export default useData;
