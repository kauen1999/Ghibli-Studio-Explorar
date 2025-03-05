import { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import { Link } from "react-router-dom";
import Api from "../services/api";
const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const responseData = await Api();
      setFilms(responseData.filmsDetails);
    };
    fetchFilms();
  }, []);

  return (
    <div className="text-white">
      <Navbar />
      <div className="grid grid-cols-5 gap-4 justify-items-center ">
        {films.map((film) => (
          <div key={film.id}  className="relative max-w-[180px] max-h-[280px] mt-[2rem]" >
            <img src={film.image}  alt={film.title} className="object-cover w-full h-full" />
            <Link to={`/films/${film.id}`}>
              <button className="absolute left-[5%] top-[85%] bg-blue-500 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-lg text-sm px-3 py-1.5 text-center ">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
