export const Movie = (props) => (
    <div className="movie-item">
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} alt=""/>
        </div>
        <div className="movie-excerpt">
            <h3>{props.movie.title}</h3>
            <a className="btn btn-primary" href="#">Ver detalhes</a>
        </div>
    </div>
)