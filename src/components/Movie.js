import { Link } from "react-router-dom";

export const Movie = (props) => (
    <div className="movie-item">
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} alt=""/>
        </div>
        <div className="movie-excerpt">
            <h3>{props.movie.title}</h3>
            <Link to={`/movie/${movie.id}` lassName="btn btn-primary"}>Ver detalhes</Link>
        </div>
    </div>
)