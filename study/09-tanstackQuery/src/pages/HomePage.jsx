import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

// queryKey 가져온 데이터를 뭐라고 저장할지 => 항상 배열임 => 첫번째 요소로 데이터모델명 => 두번째 요소로는 데이터를 설명하는 요소를 객체로 넣는다 queryKey: ["products", { page: 1 }],
// queryFn 데이터를 가져오는 함수(항상 비동기 함수, 리턴이 프로미스가 들어가야함)

function HomePage() {
    const {
        data: products,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: () => api.products.getProducts(),
    });

    const {
        data: brands,
        isLoading: isBrandsLoading,
        isError: isBrandsError,
    } = useQuery({
        queryKey: ["brands"],
        queryFn: () => api.brands.getBrands(),
        // refetchOnWindowFocus: true, // 기본값
        // refetchInterval: 1000,
    });

    console.log(brands);

    if (isLoading || isBrandsLoading) return <div>loading...</div>;
    if (isError || isBrandsError) return <div>error...</div>;

    return (
        <Page>
            <ol>
                {/* {brands &&
                    brands.map((brand) => (
                        <li key={brand.id}>{brand.nameKr}</li>
                    ))} */}
                {products &&
                    products.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
            </ol>
        </Page>
    );
}

export default HomePage;

// useEffect(() => {
//     async function init() {
//         const products = await api.products.getProducts();
//         setProducts(products);
//     }
//     init();
// }, []);
