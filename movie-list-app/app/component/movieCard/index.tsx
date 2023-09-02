import {
    selectFavoriteMovies,
    setFavoriteMovies,
} from "@/app/store/slice/favoriteSlice";
import {
    clearNotification,
    setNotifications,
} from "@/app/store/slice/notificationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import placeholder from "./placeholder.jpeg";
import Star from "./Star";

interface MovieCardProps {
    movie: Movies;
}

export default function MovieCard({
    movie,
    movie: { id, title, plot, posterUrl },
}: MovieCardProps) {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector(selectFavoriteMovies);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [image, setImage] = useState<string | StaticImageData>(posterUrl);

    useEffect(() => {
        if (favoriteMovies.some((movie: Movies) => movie.id === id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [favoriteMovies, id]);

    const handleAddToFavorites = (movieId: string, title: string) => {
        dispatch(setNotifications({ movieId, title }));
        setTimeout(() => {
            dispatch(clearNotification({ movieId, title }));
        }, 5000);
    };

    const toggleMovieSave = (movie: Movies) => {
        const isMovieInList = favoriteMovies.some(
            (currMovie: Movies) => currMovie.id === movie.id
        );
        if (isMovieInList) {
            const updatedMovies = favoriteMovies.filter(
                (currMovie: Movies) => currMovie.id !== movie.id
            );
            dispatch(setFavoriteMovies(updatedMovies));
        } else {
            dispatch(setFavoriteMovies([...favoriteMovies, movie]));
            handleAddToFavorites(movie.id.toString(), movie.title);
        }
    };

    return (
        <article className={styles.movieCardContainer}>
            <div className={styles.movieImageWrapper}>
                <Image
                    src={image ? image : placeholder}
                    alt={`poster image of ${title}`}
                    fill={true}
                    sizes='(max-width: 300px) 100vw, 50vw'
                    loading='lazy'
                    onError={() => setImage(placeholder)}
                />
            </div>
            <div className={styles.movieInfoContainer}>
                <div
                    className={styles.starWrapper}
                    onClick={() => toggleMovieSave(movie)}
                >
                    <Star isFavorite={isFavorite} />
                </div>
                <h3 className={styles.movieInfoTitle}>{title}</h3>
                <p className={styles.movieInfoPlot}>{plot}</p>
            </div>
        </article>
    );
}
