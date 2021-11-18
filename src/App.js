import { useEffect, useState } from 'react';

import './App.css';

import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [info, setInfo] = useState({});
  const [movie, setMovie] = useState('');
  const [modalMovie, setModalMovie] = useState(null);
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
      <h1>Movies Search</h1>
      <SearchInput
        type="text"
        value={movie}
        onChange={(search) => setMovie(search)}
      />
      {info.movies && (
        <>
          <ul className="list">
            {info.movies.map((movie) => (
              <li className="list2">
                <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  onClick={() => {
                    setModalMovie(movie);
                    setIsModalVisible(true);
                  }}
                />
                {movie.title}
              </li>
            ))}
          </ul>
        </>
      )}
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div className="modal-content">
            <div className="left-modal">
              <img
                className="img-modal"
                src={modalMovie.medium_cover_image}
                alt={modalMovie.title}
              />
            </div>
            <div className="info-modal">
              <div className="title-movie">
                {modalMovie.title}
                <div className="rating-movie">{modalMovie.rating}</div>
              </div>
              <div className="genre-movie">
                {modalMovie.genres.map((genre, i, arr) =>
                  i === arr.length - 1 ? `${genre}. ` : `${genre}; `,
                )}
              </div>
              <div className="synopse-movie">{modalMovie.synopsis}</div>
              <div className="download-movie">
                <a href={modalMovie.torrents[0].url}>
                  <Button text="Download 720p" />
                </a>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
