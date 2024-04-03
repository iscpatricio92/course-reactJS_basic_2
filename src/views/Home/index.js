import { useState } from "react";
import Chairs from "../../assets/chairs.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
  const [search, setSearch] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };
  const handleCleanClick=()=>{
    setSearch("");
  }
  const handleSearchClick=()=>{
    navigate(`/results/${search.trim()}`)
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5">
        <img
          src={Chairs}
          alt="Movie chairs"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className="text-4xl font-bold font-lato">Search your Movie:</h2>
        <input
          className="bg-special-gray font-lato  w-full my-4 h-11 p-1 border-none focus:outline-none focus:ring-4 focus:ring-gray-500 rounded"
          value={search}
          onChange={handleInputChange}
        />
        <div className="flex w-full justify-between">
          <button
            className="bg-red-500 text-white hover:bg-red-300 font-lato w-100 shadow-lg h-9 text-2xl"
            style={{ width: "48%" }}
            onClick={handleSearchClick}
          >
            Search
          </button>
          <button
            className="bg-red-500 text-white hover:bg-red-300 font-lato w-100 shadow-lg h-9 text-2xl"
            style={{ width: "48%" }}
            onClick={handleCleanClick}
          >
            Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
