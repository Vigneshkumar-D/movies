import './index.css'

const MovieItem = props => {
    const {eachMovie} = props

    return(
        <div className="movie-item-container">
            <img className="image-url" alt="movie-poster" src={eachMovie.imageUrl} />
        </div>
    )
}
export default MovieItem