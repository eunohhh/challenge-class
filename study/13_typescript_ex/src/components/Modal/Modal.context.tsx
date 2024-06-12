import {
    PropsWithChildren,
    ReactElement,
    createContext,
    useContext,
    useState,
} from "react";

type ModalContextValue = {
    open: (element: ReactElement) => void;
    close: () => void;
};

const initialValue: ModalContextValue = {
    open: () => {},
    close: () => {},
};

const ModalContext = createContext<ModalContextValue>(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
    const [modalElement, setModalElement] = useState<ReactElement | null>(null);

    const open: ModalContextValue["open"] = (element) => {
        setModalElement(element);
    };
    const close: ModalContextValue["close"] = () => {
        setModalElement(null);
    };

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            {modalElement}
        </ModalContext.Provider>
    );
}
