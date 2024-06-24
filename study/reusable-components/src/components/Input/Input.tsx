import { cva } from "class-variance-authority";
import { InputHTMLAttributes, PropsWithChildren } from "react";

const labaelVariants = cva("text-sm font-medium text-gray-700", {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
    },
});

const inputVariants = cva("w-full rounded-md border border-gray-300 p-2", {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
    },
});

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    size?: "sm" | "md" | "lg";
};

function Input({ label, size, ...props }: PropsWithChildren<InputProps>) {
    return (
        <div>
            <label className={labaelVariants({ size })}>{label}</label>
            <input className={inputVariants({ size })} {...props} />
        </div>
    );
}

export default Input;
