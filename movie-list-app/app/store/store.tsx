import { configureStore } from "@reduxjs/toolkit";
import notifications from "./slice/notificationSlice";
import favoriteMovies from "./slice/favoriteSlice";

export const store = configureStore({
    reducer: {
        notifications: notifications,
        favoriteMovies: favoriteMovies,
    },
});
