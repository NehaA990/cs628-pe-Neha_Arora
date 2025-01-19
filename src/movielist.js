import React, { useState } from 'react';
import './movielist.css';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Godfather', genre: 'Crime, Drama', releaseYear: 1972 },
    { title: 'The Dark Knight', genre: 'Action, Thriller', releaseYear: 2008 },
    { title: '12 Angry Men', genre: 'Drama', releaseYear: 1957 },
    { title: 'Schindler\'s List', genre: 'Biography, Drama, History', releaseYear: 1993 },
  ]);

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    if (selectedGenre === 'All Genres') {
      setFilteredMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) => {
        const genres = movie.genre.split(',').map((genre) => genre.trim());
        return genres.includes(selectedGenre);
      });
      setFilteredMovies(filteredMovies);
    }
  };

  const handleMovieClick = (movieTitle) => {
    alert(`You clicked on: ${movieTitle}`);
  };

  const genres = Array.from(new Set(movies.map((movie) => {
    const genres = movie.genre.split(',').map((genre) => genre.trim());
    return genres;
  }))).reduce((acc, val) => acc.concat(val), []);

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movie List</h1>
      <select
        className="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="All Genres">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.title} className="movie-item" onClick={() => handleMovieClick(movie.title)}>
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-genre">Genre: {movie.genre}</p>
            <p className="movie-release-year">Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;