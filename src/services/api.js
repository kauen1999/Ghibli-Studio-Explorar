async function Api() {
  //pega todas as urls e coloca o resultado nessas constantes dentro do [].
  const [fetchFilms, fetchPeople, fetchLocations, fetchSpecies, fetchVehicles] =
    await Promise.all([
      fetch("https://ghibliapi.vercel.app/films"),
      fetch("https://ghibliapi.vercel.app/people"),
      fetch("https://ghibliapi.vercel.app/locations"),
      fetch("https://ghibliapi.vercel.app/species"),
      fetch("https://ghibliapi.vercel.app/vehicles"),
    ]);

  //transforma os resultados em json e adiciona a cada uma das respectivas constantes dentro do [].
  const [films, peoples, locations, species, vehicles] = await Promise.all([
    fetchFilms.json(),
    fetchPeople.json(),
    fetchLocations.json(),
    fetchSpecies.json(),
    fetchVehicles.json(),
  ]);

  const filmsMap = films.reduce((map, film) => {
    map[film.url] = film;
    return map;
  }, {});

  const peoplesMap = peoples.reduce((map, people) => {
    map[people.url] = people;
    return map;
  }, {});

  const locationsMap = locations.reduce((map, location) => {
    map[location.url] = location;
    return map;
  }, {});

  const speciesMap = species.reduce((map, specie) => {
    map[specie.url] = specie;
    return map;
  }, {});

  const vehiclesMap = vehicles.reduce((map, vehicle) => {
    map[vehicle.url] = vehicle;
    return map;
  }, {});

  const filmsDetails = Array.isArray(films) ? films.map((film) => ({
    id: film.id,
    title: film.title,
    original_title: film.original_title,
    original_title_romanised: film.original_title_romanised,
    image : film.image,
    movie_banner : film.movie_banner,
    description: film.description,
    director: film.director,
    producer: film.producer,
    release_date: film.release_date,
    running_time: film.running_time,
    rt_score: film.rt_score,
    people: Array.isArray(film.people) ? film.people.map((peopleURL) => peoplesMap[peopleURL]) : [],
    species: Array.isArray(film.species) ? film.species.map((specieURL) => speciesMap[specieURL]) : [],
    locations: Array.isArray(film.locations) ? film.locations.map((locationURL) => locationsMap[locationURL]) : [],
    vehicles: Array.isArray(film.vehicles) ? film.vehicles.map((vehicleURL) => vehiclesMap[vehicleURL]) : [],
})) : [];

  const peoplesDetails = peoples.map((people) => ({
    id: people.id,
    name: people.name,
    gender: people.gender,
    age: people.age,
    eye_color: people.eye_color,
    hair_color: people.hair_color,
    films: Array.isArray(people.films) ? people.films.map((filmUrl) => filmsMap[filmUrl]) : [],
    species: speciesMap[people.species],
  }));

  const locationsDetails = locations.map((location)=> (
    {
      id: location.id,
      name: location.name,
      climate: location.climate,
      terrain: location.terrain,
      surface_water: location.surface_water,
      residents: Array.isArray(location.residents) ? location.residents.map((residetUrl) => peoplesMap[residetUrl]) : [],
      films: Array.isArray(location.films) ? location.films.map((filmUrl)=> filmsMap[filmUrl]) : [],
      }
  ));

  const speciesDetails = species.map((specie)=>(
    {
      id: specie.id,
      name: specie.name,
      classification: specie.classification,
      eye_colors: specie.eye_colors,
      hair_colors: specie.hair_colors,
      films: Array.isArray(specie.films) ? specie.films.map((filmUrl) => filmsMap[filmUrl]) : [],
      }
  ))

  const vehiclesDetails = vehicles.map((vehicle)=>(
    {
      id: vehicle.id,
      name: vehicle.name,
      description: vehicle.description,
      vehicle_class: vehicle.vehicle_class,
      length: vehicle.length,
      pilot: peoplesMap[vehicle.pilot],
      films: Array.isArray(vehicle.films) ? vehicle.films.map((filmUrl) => filmsMap[filmUrl]) : [],
      }
  ))

  return { filmsDetails, peoplesDetails, locationsDetails, speciesDetails, vehiclesDetails };
}
Api();

export default Api;
