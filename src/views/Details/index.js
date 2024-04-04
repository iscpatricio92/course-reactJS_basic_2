import { useParams } from "react-router-dom";
import {
  fetchMovieDetail,
  fetchMovieRatings,
} from "../../redux/api/actions/movies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import Loading from "../../components/Loading";
export default function Detail() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const {
    isFetchingMovieRatings,
    isFetchingMovieDetail,
    isLoading,
    errorFetchingMovieDetail,
    errorFetchingMovieRatings,
    ratings,
    movieDetail,
  } = useSelector((state) => state.MoviesReducer);

  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  const renderContent = () => {
    if (isLoading || isFetchingMovieDetail || isFetchingMovieRatings) {
      return <Loading message="getting information about the movie" />;
    } else if (errorFetchingMovieDetail || errorFetchingMovieRatings) {
      return <p>An error has occurred obtaining the information</p>;
    }

    return (
      <>
        <LeftContainer movieUrl={details?.data?.title?.primaryImage.url} />
        <RightContainer
          title={overview?.data?.title.titleText.text ?? "no title"}
          year={overview?.data?.title?.releaseYear?.year ?? "no year"}
          rating={ratings?.data?.title?.ratingsSummary?.aggregateRating}
          synpsis={
            overview?.data?.title?.plot?.plotText?.plainText ?? "no Available"
          }
          genres={genres}
          casts={topCast}
        />
      </>
    );
  };
  const { details, genres, overview, topCast } = movieDetail;

  return (
    <div className="flex flex-row px-16 h-screen justify-center items-center">
      {renderContent()}
    </div>
  );
}
