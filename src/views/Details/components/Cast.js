const Cast = ({topCast}) => {
  return (
    <div className="flex flex-row my-1 flex-wrap">
      <span className="mr-1 font-bold">Cast:</span>
      {topCast?.data?.title?.principalCredits?.map((value) =>
        value?.credits?.map((credit, idx) => {
          if (credit.name !== undefined)
            return (
              <span key={idx}>{`
              ${credit?.name?.nameText?.text}
              ${idx !== (value?.credits).length - 1 ? "," : ""}
              `}</span>
            );
        })
      )}
    </div>
  );
};
export default Cast;
