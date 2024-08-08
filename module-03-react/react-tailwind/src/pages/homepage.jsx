import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // useeffeet
  useEffect(() => {
    const getMovies = async () => {
      try {
        const req = await axios.get("https://freetestapi.com/api/v1/movies");
        setMovies(req.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div>loading....</div>;

  return (
    <div className="flex flex-wrap">
      {movies.map((movie, index) => (
        <div key={index} className="p-4 border">
          <p>{movie.title}</p>
          <Link
            className="text-xs text-blue-500"
            to={`/movies/details/${movie.id}`}
          >
            Read More..
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
