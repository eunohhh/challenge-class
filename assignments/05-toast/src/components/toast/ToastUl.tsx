import useToast from "../../hooks/useToast";
import ToastLi from "./ToastLi";

function ToastUl() {
    const { toasts } = useToast();

    return (
        <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
            {toasts.map((toast) => (
                <ToastLi key={toast.id} toast={toast} />
            ))}
        </ul>
    );
}

export default ToastUl;
