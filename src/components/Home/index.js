import { Component } from "react";
import MovieItem from "../MovieItem";
import Header from "../Header";
import './index.css'
import Cookies from "js-cookie";

class Home extends Component {
    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovieDetails()
    }

    getMovieDetails = async () => {
       const jwt_token =  Cookies.get('jwt_token')
        console.log(jwt_token);
        const url = "http://localhost:8082/movies"
        const options = {
            method: 'GET',
            
            headers: {
              'Content-Type': 'application/json',
              'uuid': jwt_token
            }
          };
        
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const formatedData = data.map(eachMovie => ({
                movieId: eachMovie.movie_id,
                artDirector: eachMovie.artDirector,
                boxOffice: eachMovie.boxOffice,
                budget: eachMovie.budget,
                cinematography: eachMovie.cinematography,
                director: eachMovie.director,
                editor: eachMovie.editor,
                imageUrl: eachMovie.imageUrl,
                movieLanguage: eachMovie.movieLanguage,
                movieName: eachMovie.movieName,
                musicDirector: eachMovie.musicDirector,
                producers: eachMovie.producers,
                production: eachMovie.production,
                starring: eachMovie.starring,
                stunts: eachMovie.stunts,
            }));
            
            this.setState({ movies: formatedData });
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    render(){
        const {movies} = this.state
        const token = Cookies.get("jwt_token")
        if(token===undefined){
            const {history} = this.props
            history.replace('/login')
        }
        return(
            <div className="home-container">
                 <div class="blurry-background"></div>
                    <Header />
                    <div className="home-sub-container">
                        {movies.map(eachMovie => (
                            <MovieItem eachMovie={eachMovie} key={eachMovie.movie_id} />
                        ))}
                    </div>
            </div>
        )
    }
}
export default Home