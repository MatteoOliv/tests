import Button from "../button";
import styles from "./styles.module.scss";

interface CategoriesProps {
    categories: string[];
    onClick: (category: string) => void;
    selectedCategories: string[];
    onReset: () => void;
}

const RESET_FILTERS = "Reset filters";

export default function Categories({
    categories,
    onClick,
    selectedCategories,
    onReset,
}: CategoriesProps) {
    return (
        <aside className={styles.categoriesContainer}>
            {categories.map((category: string) => {
                return (
                    <div
                        className={`${styles.categoryWrapper} ${
                            selectedCategories.includes(category)
                                ? styles.active
                                : styles.notActive
                        }`}
                        key={category}
                        onClick={() => onClick(category)}
                    >
                        {category}
                    </div>
                );
            })}
            {selectedCategories.length ? (
                <Button onClick={onReset}>{RESET_FILTERS}</Button>
            ) : null}
        </aside>
    );
}
