import { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import Api from "../services/api";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await Api();
      console.log(response.locationsDetails);
      setLocations(response.locationsDetails);
    };
    fetchLocations();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="p-[20px] grid grid-cols-3 gap-4 justify-items-center">
        {locations.map((location)=>(
          <div key={location.id} className="card w-80 h-auto bg-[#07182E] rounded-2xl">
          <div className="relative z-10 p-4 card-content">
            <div className="flex items-center mb-4">
              <div>
                <h2 className="text-lg font-bold truncate text-white/90">
                  {location.name}
                </h2>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 text-xs font-semibold text-white/80">Especifications</h3>
              <div className="flex flex-wrap -mx-1">
                <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/10">
                  Climate: {location.climate}
                </div>
                <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/10">
                  Terrain: {location.terrain}
                </div>
                <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/10">
                Surface water: {location.surface_water}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 text-xs font-semibold text-white/80">Residents</h3>
             
                {location.residents?.map((resident, index) =>(
                   <ul key={index} className="grid grid-cols-1 gap-1 text-xs text-white/60">
                  <li className="flex items-center">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                    <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                  <span className="truncate">{resident?.name ? resident.name : 'Unknow'}</span>
                  </li>
                  </li>
              </ul>
                  ))}
            </div>
            <div className="mb-4">
              <h3 className="mb-2 text-xs font-semibold text-white/80">Films</h3>
             
                {location.films?.map((film, index) =>(
                   <ul key={index} className="grid grid-cols-1 gap-1 text-xs text-white/60">
                  <li className="flex items-center">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-3 h-3 mr-1 text-white/70">
                    <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                  <span className="truncate">{film?.title ? film.title : 'Unknow'}</span>
                  </li>
                  </li>
              </ul>
                  ))}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
