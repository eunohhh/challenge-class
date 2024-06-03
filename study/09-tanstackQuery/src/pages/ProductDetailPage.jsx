import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
    const params = useParams();
    const productId = params.productId;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["product", { id: productId }],
        queryFn: () => api.products.getProduct(productId),
        // refetchInterval: 1000,
    });

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return <Page>{data.name}</Page>;
}

export default ProductDetailPage;
