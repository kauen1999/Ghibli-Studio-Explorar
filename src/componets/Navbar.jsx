import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-[5px] flex items-center justify-center h-full">
      <Link to="/">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button>
      </Link>
      <Link to="/films">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">Films</button>
      </Link>
      <Link to="/people">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">People</button>
      </Link>
      <Link to="/locations">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">Locations</button>
      </Link>
      <Link to="/species">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">Species</button>
      </Link>
      <Link to="/vehicles">
        <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">Vehicles</button>
      </Link>
    </div>
  );
};

export default Navbar;
