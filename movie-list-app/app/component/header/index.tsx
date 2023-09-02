import Button from "../button";
import { ROW, REVERSE } from "@/app/_constants";
import styles from "./styles.module.scss";

interface HeaderProps {
    title: string;
    direction: typeof ROW | typeof REVERSE;
    callbackText: string;
    navigation: string;
}

export default function Header({
    title,
    direction,
    callbackText,
    navigation,
}: HeaderProps) {
    return (
        <header
            className={`${styles["header--" + direction]} ${styles.header}`}
        >
            <h1 className={styles.headerTitle}>{title}</h1>
            <Button href={navigation}>{callbackText}</Button>
        </header>
    );
}
