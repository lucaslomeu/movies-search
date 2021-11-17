import './App.css';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';

function App() {
  const [info, setInfo] = useState({});
  const [movie, setMovie] = useState('');

  useEffect(() => {
    if (movie) {
      fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${movie}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response.data);
          console.log(response.data);
        });
    }
  }, [movie]);

  return (
    <div className="App">
      <h1>Movies</h1>
      <SearchInput
        type="text"
        value={movie}
        onChange={(search) => setMovie(search)}
      />
      {info.movies && (
        <ul>
          {info.movies.map((movie) => (
            <li>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
