"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteMovies } from "../../store/slice/favoriteSlice";
import MoviesList from "../moviesList";
import styles from "./styles.module.scss";
import Button from "../button";
import Spinner from "../spinner";
import SearchBar from "../searchBar";
import Categories from "../categories";

const PAGE_LIMIT = 10;
const LOAD_MORE = "Load more";

export default function AllMovies() {
    const favoriteMovies = useSelector(selectFavoriteMovies);
    let currentPagination = PAGE_LIMIT;
    if (typeof window !== "undefined") {
        const storedPagination = localStorage.getItem("moviePagination");
        currentPagination = storedPagination
            ? parseInt(storedPagination)
            : PAGE_LIMIT;
    }

    const [movies, setMovies] = useState<Movies[]>([]);
    const [limit, setLimit] = useState<number>(currentPagination);
    const [searchWord, setSearchWord] = useState<string>("");
    const [filteredMovies, setFilteredMovies] = useState<Movies[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [openFilters, setOpenFilters] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const res = await axios.get("/api/movies", {
                    params: {
                        limit,
                        offset: 0,
                    },
                });

                const movies: Movies[] = res.data;

                setMovies(movies);
                setFilteredMovies(movies);
            } catch (error) {
                console.warn(error);
            }
            setLoading(false);
        };
        fetchMovies();
        localStorage.setItem("moviePagination", JSON.stringify(limit));
    }, [limit]);

    useEffect(() => {
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchWord.toLowerCase())
        );

        const filteredMoviesGeneres = filteredMovies.filter((item) =>
            item.genres.some((category) =>
                selectedCategories.includes(category)
            )
        );

        if (!selectedCategories.length && !searchWord) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(
                selectedCategories.length
                    ? filteredMoviesGeneres
                    : filteredMovies
            );
        }
    }, [searchWord, selectedCategories, movies]);

    useEffect(() => {
        const uniqueGenres = filteredMovies.reduce<string[]>((genres, item) => {
            item.genres.forEach((genre) => {
                if (!genres.includes(genre)) {
                    genres.push(genre);
                }
            });
            return genres;
        }, []);

        setCategories(uniqueGenres);
    }, [movies, filteredMovies]);

    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const handleLoadMore = () => {
        setLimit((prev) => prev + PAGE_LIMIT);
    };

    const handleSearch = (searchWord: string) => {
        setSearchWord(searchWord);
    };

    const handleCategoryClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((item) => item !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleResetFilters = () => {
        setSelectedCategories([]);
    };

    const handleOpenFilters = () => {
        setOpenFilters((prev) => !prev);
    };

    return (
        <section className={styles.allMoviesContainer}>
            <SearchBar
                searchWord={searchWord}
                onChange={(e) => handleSearch(e.currentTarget.value)}
                openFilters={openFilters}
                onClick={handleOpenFilters}
                selectedCategories={selectedCategories}
            />
            {openFilters && (
                <Categories
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onClick={handleCategoryClick}
                    onReset={handleResetFilters}
                />
            )}
            {loading && !movies.length ? (
                <Spinner />
            ) : (
                <MoviesList filteredMovies={filteredMovies} />
            )}

            {!searchWord && !selectedCategories.length && movies.length ? (
                <div className={styles.loadMoreContainer}>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <Button onClick={handleLoadMore}>{LOAD_MORE}</Button>
                    )}
                </div>
            ) : null}
        </section>
    );
}
