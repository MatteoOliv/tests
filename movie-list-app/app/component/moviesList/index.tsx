import MovieCard from "../movieCard";
import styles from "./styles.module.scss";

interface MoviesListProps {
    filteredMovies: Movies[];
}

export default function MoviesList({ filteredMovies }: MoviesListProps) {
    return (
        <section className={styles.moviesList}>
            {filteredMovies.map((movie: Movies) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
}
