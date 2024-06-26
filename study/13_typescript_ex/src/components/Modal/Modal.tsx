import { useModal } from "./Modal.context";

function Modal() {
    const modal = useModal();

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-80 h-40">
                <h5>이게 모달 본체</h5>
                <button onClick={modal.close}>꺼라</button>
            </div>
        </div>
    );
}

export default Modal;
