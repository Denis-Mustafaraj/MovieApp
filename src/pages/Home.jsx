import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Dune", releaseDate: "1990" },
    { id: 2, title: "Dune part 2", releaseDate: "1995" },
    { id: 3, title: "John Wick", releaseDate: "2000" },
  ];

  const heandleSearch = () => {
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={heandleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
