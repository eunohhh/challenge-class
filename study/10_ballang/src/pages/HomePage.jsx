import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
    const navigate = useNavigate();
    const { data: products, isLoading } = useQuery({
        queryKey: ["products", { list: true }],
        queryFn: () => api.products.getProducts(),
    });

    const { mutate: addItemToCart } = useMutation({
        mutationFn: (productId) => api.cart.addItemToCart(productId),
    });

    const handleClickAddItemToCart = (productId) => () => {
        addItemToCart(productId, {
            onSuccess: () => {
                const yes = confirm(
                    "상품이 잘 추가되었습니다. 장바구니로 갈까요?"
                );
                if (yes) navigate("/cart");
            },
        });
    };

    // console.log(products);
    return (
        <div>
            <h1>homePage</h1>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h5>{product.name}</h5>
                            <button
                                onClick={handleClickAddItemToCart(product.id)}
                            >
                                장바구니 추가
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomePage;
