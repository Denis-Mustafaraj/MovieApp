import MovieCard from "../components/MovieCard"

function Home(){

    const movies = [
        {id: 1 , title: "Dune" , releaseDate: "1990"},
        {id: 2 , title: "Dune part 2" , releaseDate: "1995"},
        {id: 3 , title: "John Wick" , releaseDate: "2000"},
    ]


    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home