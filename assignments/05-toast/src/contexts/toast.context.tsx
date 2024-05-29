import { ReactNode, createContext, useState } from "react";
import { Toast } from "../types/d";

interface Props {
    children: ReactNode;
}

const initialValue: { toasts: Toast[]; addToasts: () => void } = {
    toasts: [],
    addToasts: () => {},
};

const ToastContext = createContext(initialValue);

export const ToastProvider = ({ children }: Props) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const value = {
        // open: (title, content) => {
        //     const ele = <Modal title={title} content={content} />;
        //     setModal(ele);
        // },
        toasts,
        addToasts: () => {
            const test = {
                id: "test",
                title: "test",
                contents: "testtest",
                isOpen: true,
            };
            console.log(test);
            setToasts((prev) => [...prev, test]);
        },
    };

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    );
};

export default ToastContext;
