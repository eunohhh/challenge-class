/* eslint-disable react/prop-types */
import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
    const modal = useModal();

    const { release } = useScrollLock();

    const handleClick = () => {
        modal.close();
        release();
    };

    return (
        <Backdrop>
            <div className="modal">
                <h1>{title}</h1>
                <p>{content}</p>
                Modal<button onClick={handleClick}>꺼라</button>
            </div>
        </Backdrop>
    );
}

export default Modal;
