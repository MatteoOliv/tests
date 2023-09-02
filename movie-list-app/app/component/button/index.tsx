import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    addClassName?: string;
}

function Button({ children, href, onClick, addClassName }: ButtonProps) {
    const content = href ? (
        <Link
            className={`${styles.button}${
                addClassName ? ` ${addClassName}` : ""
            }`}
            href={href}
        >
            {children}
        </Link>
    ) : (
        <button
            className={`${styles.button}${
                addClassName ? ` ${addClassName}` : ""
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );

    return content;
}

export default Button;
