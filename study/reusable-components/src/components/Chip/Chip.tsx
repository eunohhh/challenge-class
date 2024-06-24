import { cva } from "class-variance-authority";

interface ChipProps {
    intent?:
        | "primary"
        | "secondary"
        | "danger"
        | "warning"
        | "info"
        | "success";
    label: string;
}

const chipVariants = cva("text-sm border rounded-full px-2.5 py-0.5", {
    variants: {
        intent: {
            primary: "bg-blue-500 border-blue-500 text-white",
            secondary: "bg-gray-500 border-gray-500 text-white",
            danger: "bg-red-500 border-red-500 text-white",
            warning: "bg-yellow-500 border-yellow-500 text-white",
            info: "bg-violet-500 border-violet-500 text-white",
            success: "bg-green-500 border-green-500 text-white",
            default: "bg-white border-black text-black",
        },
    },
    defaultVariants: {
        intent: "default",
    },
});

function Chip({ intent, label }: ChipProps) {
    // className 도 넣어줄 수 있음 props로 받아서
    return <div className={chipVariants({ intent })}>{label}</div>;
}

export default Chip;
