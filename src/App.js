import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from './components/Navbar'

function App() {
  return (  
    <div className="App">
      <Navbar />
      <Banner />
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Now" fetchURL={requests.fetchTrending} />
     <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
     <Row title="Action Movies" fetchURL={requests.fetchAcionMovies} />
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
