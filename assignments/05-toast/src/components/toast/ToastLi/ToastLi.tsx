import { Toast } from "../../../types/d";

function ToastLi({ toast }: { toast: Toast }) {
    return (
        <li>
            <div className="shadow-lg bg-white p-6 border rounded-lg w-[320px] transition translate-x-[calc(100%+24px)] flex items-center duration-500 text-sm !translate-x-0">
                <div className="grow flex flex-col">
                    <h6 className="font-semibold">{toast.title}</h6>
                    <p>{toast.contents}</p>
                </div>
            </div>
        </li>
    );
}

export default ToastLi;
