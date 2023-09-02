import { setFavoriteMovies } from "@/app/store/slice/favoriteSlice";
import {
    clearNotification,
    selectNotifications,
} from "@/app/store/slice/notificationSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const ADD_TO_FAVOURITE = "add to favorite!";

export default function Notifications() {
    const dispatch = useDispatch();
    const notificationList = useSelector(selectNotifications);

    useEffect(() => {
        const favoriteMoviesString = localStorage.getItem("favoriteMovies");
        const savedFavorites = favoriteMoviesString
            ? JSON.parse(favoriteMoviesString)
            : [];
        dispatch(setFavoriteMovies(savedFavorites));
    }, [dispatch]);

    const handleCloseNotification = (movieId: string) => {
        dispatch(clearNotification({ movieId }));
    };

    const content = notificationList.length ? (
        <aside className={styles.notificationList}>
            {notificationList.map((notification: Notify) => {
                return (
                    <div
                        className={styles.notificationWrapper}
                        key={notification.movieId}
                    >
                        <div
                            onClick={() =>
                                handleCloseNotification(notification.movieId)
                            }
                            className={styles.notificationCloser}
                        >
                            x
                        </div>
                        <p>{`${notification.title} ${ADD_TO_FAVOURITE}`}</p>
                    </div>
                );
            })}
        </aside>
    ) : null;

    return content;
}
