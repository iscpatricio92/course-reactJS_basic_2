const Genre = ({ genres }) => {
  return (
    <div className="flex flex-row my-1">
      <span className="mr-1 font-bold">Genres:</span>
      {genres?.data?.title?.titleGenres?.genres?.map((value, index) => (
        <span key={index}>
          {`${value.genre.text}${
            index !== genres?.data?.title?.titleGenres?.genres - 1 ? "," : ""
          }`}
        </span>
      ))}
    </div>
  );
};
export default Genre;
