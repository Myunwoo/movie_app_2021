import React from "react";
import Proptypes from "prop-types";
import './Movie.css';


function Movie({year, title, summary, poster, genres}){
    return <div className="movie">
        <div className="movie__column">
            <img src={poster} alt={title} title={title} />
        </div>
        <div className="movie__column">
            <span className="movie__title">{title}</span>
            <span className="movie__year">{year}</span>
            <ul className="movie__genres">
                {genres.map((genre,index) => <li key={index} className="movie__genres__genre">
                {genre}</li>)}
            </ul>
        <span className="movie__summary">{summary}</span>
        </div>
    </div>;
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;