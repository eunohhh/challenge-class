/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
    open: () => {},
    close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    const value = {
        // open: (title, content) => {
        //     const ele = <Modal title={title} content={content} />;
        //     setModal(ele);
        // },
        open: (options) => {
            setModal(options);
        },
        close: () => {
            setModal(null);
        },
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
            {modal && <Modal title={modal.title} content={modal.content} />}
        </ModalContext.Provider>
    );
};

export default ModalContext;
