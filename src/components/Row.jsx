import {useState, useEffect} from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from '../axios'
const base_url = 'https://image.tmdb.org/t/p/original'


function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerUrl] = useState("")

    useEffect(() => {
        try {
        const fetchData = async () => {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()  
        } catch (error) {
            console.log(error)
        }
    }, [fetchURL])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) => {
        if(trailerURL) {
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search) 
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(error => console.log(error))
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row-posters">
            {movies.map(movie => (
                <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${
                   isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name} 
                className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                />
            ))}
        </div>
         {trailerURL && <YouTube videoId={trailerURL} opts={opts} /> } 
    </div>
  )
}

export default Row