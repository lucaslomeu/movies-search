import { useEffect, useState } from 'react';

import './App.css';

import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [info, setInfo] = useState({});
  const [movie, setMovie] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <ul className="list">
          {info.movies.map((movie) => (
            <li className="list2">
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                onClick={() => setIsModalVisible(true)}
              />
              {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                  {movie.title}
                  <a href={movie.torrents[0].url}>
                    <Button text="Download" />
                  </a>
                </Modal>
              ) : (
                `${movie.title}`
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
