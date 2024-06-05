import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
    const queryClient = useQueryClient();

    const { data: cart, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: () => api.cart.getCart(),
    });

    const { mutateAsync: removeItemFromCart } = useMutation({
        mutationFn: (productId) => api.cart.removeItemFromCart(productId),
    });

    const handleClickRemoveItemFromCart = (productId) => async () => {
        console.log(productId);

        await removeItemFromCart(productId);
        alert("상품이 삭제되었습니다.");

        //exact: true
        queryClient.invalidateQueries({ queryKey: ["cart"] });
    };

    return (
        <div>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <ul>
                    {cart.items.map((cartItem) => (
                        <li key={cartItem.id}>
                            <h5>
                                {cartItem.product.name}{" "}
                                <span>[ {cartItem.quantity} 개]</span>
                            </h5>
                            <button
                                onClick={handleClickRemoveItemFromCart(
                                    cartItem.id
                                )}
                            >
                                장바구니에서 빼기기
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;
