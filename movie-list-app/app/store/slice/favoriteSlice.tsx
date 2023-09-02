import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteMoviesState {
    moviesList: Movies[];
}

const initialState: FavoriteMoviesState = {
    moviesList: [],
};

const favoriteMovies = createSlice({
    name: "favoriteMovies",
    initialState,
    reducers: {
        setFavoriteMovies: (state, action: PayloadAction<Movies[]>) => {
            state.moviesList = action.payload;
        },
    },
});

export default favoriteMovies.reducer;
export const { setFavoriteMovies } = favoriteMovies.actions;
export const selectFavoriteMovies = (state: {
    favoriteMovies: FavoriteMoviesState;
}) => state.favoriteMovies.moviesList;
