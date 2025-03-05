import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Api from "../services/api";

const FilmDetails = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams(); // Obtém o id do filme pela URL

  useEffect(() => {
    const fetchFilm = async () => {
      // Chama a função Api para pegar todos os filmes
      const { filmsDetails } = await Api();
      
      // Filtra o filme específico com base no id
      const selectedFilm = filmsDetails.find(film => film.id === id);
      
      if (selectedFilm) {
        setFilm(selectedFilm); // Define o filme selecionado no estado
      } else {
        console.error("Filme não encontrado");
      }
    };

    fetchFilm(); // Executa a requisição
  }, [id]);
  return (
    <div className="">
        <Navbar/>
      <div className="grid min-h-screen grid-cols-2 gap-8 p-8 text-white ">
        {/* Lado esquerdo - Imagem do filme */}
        <div className="relative">
          <img src={film.image} alt={film.title} className="object-cover rounded-lg shadow-lg vw-full vh-full"  />
        </div>
        {/* Lado direito - Banner, Títulos e Infos */}
        <div className="flex flex-col gap-6">
          {/* Banner e Títulos */}
          <div className="relative w-full">
            <img src={film.movie_banner} alt="Banner" className="w-full h-[200px] object-cover rounded-lg shadow-lg"/>
            <h1 className="absolute px-4 py-2 text-3xl font-bold bg-opacity-50 rounded-lg bg-black/20 bottom-4 left-4">
              {film.title} {film.original_title}
            </h1>
          </div>

          {/* Informações principais */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-wrap -mx-1">
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Director: {film.director}
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Producer: {film.producer}
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Title Translator: {film.original_title_romanised}
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Release: {film.release_date}
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Score: {film.rt_score}
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Duracion: {film.running_time} minutes
              </div>
            </div>
          </div>
          {/* Mais detalhes abaixo */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Sinopse</h2>
            <p className="mt-2 text-gray-300">{film.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
