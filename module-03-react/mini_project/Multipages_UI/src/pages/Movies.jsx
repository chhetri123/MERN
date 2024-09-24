import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={`${movie.title} Poster`}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {movie.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {movie.year} | {movie.genre.join(", ")}
              </p>
              <p className="text-gray-700 mb-4">{movie.plot}</p>
              <p className="text-yellow-500 font-bold text-lg">
                Rating: {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
