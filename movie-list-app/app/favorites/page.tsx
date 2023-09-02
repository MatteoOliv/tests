"use client";
import styles from "../styles/page.module.scss";
import { useSelector } from "react-redux";
import { selectFavoriteMovies } from "../store/slice/favoriteSlice";
import Header from "../component/header";
import { REVERSE } from "../_constants";
import MoviesList from "../component/moviesList";

const PAGE_TITLE = "favorites";
const BACK_TEXT = "<- back";
const NAVIGATE = "/";

function Favorites() {
    const favoriteMovies = useSelector(selectFavoriteMovies);

    return (
        <main className={styles.main}>
            <Header
                direction={REVERSE}
                title={PAGE_TITLE}
                callbackText={BACK_TEXT}
                navigation={NAVIGATE}
            />
            <MoviesList filteredMovies={favoriteMovies} />
        </main>
    );
}

export default Favorites;
