import Cast from "./Cast";
import Genre from "./Gender";
import Rating from "./Rating";

const RightContainer = ({ title, year, rating, synpsis, genres, casts }) => {
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">{`${title} (${year})`}</h2>
      
      {rating > 0 && <Rating rating={rating} />}
      <p>{synpsis}</p>
      {genres && <Genre genres={genres} />}
      {casts && <Cast topCast={casts} />}
    </div>
  );
};

export default RightContainer;
