type Movies = {
    id: number,
    title: string,
    year: string,
    runtime: string,
    genres: string[],
    director: string,
    actors: string,
    plot: string,
    posterUrl: string,
}

type Notify = {
    movieId: string,
    title?: string
  }