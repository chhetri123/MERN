import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIndividualMovie = async () => {
      try {
        const req = await axios.get(
          `https://freetestapi.com/api/v1/movies/${id}`
        );
        setMovie(req.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    getIndividualMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(movie)}</div>;
};

export default AboutPage;
