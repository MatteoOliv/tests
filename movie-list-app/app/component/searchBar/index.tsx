import Button from "../button";
import styles from "./styles.module.scss";

interface SearchBarProps {
    searchWord: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    openFilters: boolean;
    onClick: () => void;
    selectedCategories: string[];
}

const SEARCH = "Search movie";
const FILTERS = "Filters";

export default function SearchBar({
    searchWord,
    onChange,
    openFilters,
    onClick,
    selectedCategories,
}: SearchBarProps) {
    return (
        <div className={styles.searchBarContainer}>
            <input
                placeholder={SEARCH}
                type='text'
                value={searchWord}
                onChange={onChange}
            />
            <Button
                onClick={onClick}
                addClassName={`${openFilters ? styles.filtersOpen : ""} ${
                    styles.filtersButton
                }`}
            >
                {FILTERS}
                {selectedCategories.length ? (
                    <div className={styles.toolTip}>
                        {selectedCategories.length}
                    </div>
                ) : null}
            </Button>
        </div>
    );
}
