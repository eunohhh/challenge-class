import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariants = cva(
    ["border", "rounded", "font-semibold", "transition", "hover:brightness-90"],
    {
        variants: {
            intent: {
                primary: "border-sky-500",
                secondary: "border-slate-500",
                danger: "border-red-500",
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-4 py-1.5 text-base",
                lg: "px-5 py-2 text-lg",
            },
            variant: {
                outline: "bg-white",
                contained: "text-white",
            },
        },
        compoundVariants: [
            {
                intent: "primary",
                variant: "contained",
                className: "bg-sky-500",
            },
            {
                intent: "primary",
                variant: "outline",
                className: "text-sky-500",
            },
            {
                intent: "secondary",
                variant: "contained",
                className: "bg-slate-500",
            },
            {
                intent: "secondary",
                variant: "outline",
                className: "text-slate-500",
            },
            {
                intent: "danger",
                variant: "contained",
                className: "bg-red-500",
            },
            {
                intent: "danger",
                variant: "outline",
                className: "text-red-500",
            },
        ],
        defaultVariants: {
            intent: "primary",
            size: "md",
            variant: "contained",
        },
    }
);

type ButtonVariantsType = VariantProps<typeof buttonVariants>;

// type ButtonProps = ButtonVariantsType &
//     DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
//         children: React.ReactNode;
//     };

// type ButtonProps = ButtonVariantsType & ComponentProps<typeof Link>;

type ButtonProps = ButtonVariantsType &
    (({} & ComponentProps<"button">) | ({ href: string } & ComponentProps<typeof Link>));

function Button({ intent, size, variant, children, ...props }: PropsWithChildren<ButtonProps>) {
    if ("href" in props) {
        return (
            <Link className={buttonVariants({ intent, size, variant })} {...props}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className={buttonVariants({ intent, size, variant })} {...props}>
                {children}
            </button>
        );
    }
}

export default Button;
