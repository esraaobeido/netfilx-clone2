import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FavoriteModal from '../FavoriteModal/FavoriteModal';
import { Form  } from 'react-router-dom';


function FavList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState('');

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);
  // useEffect(() => {
  //   console.log(comments);
  // }, [comments]);

  const fetchFavoriteMovies = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL || "https://onlineserver-oznu.onrender.com"}/getMovies`);
    setFavoriteMovies(response.data);
  };

  const handleDeleteMovie = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL || "https://onlineserver-oznu.onrender.com"}/delete/${id}`);
    fetchFavoriteMovies();
  };

  const handleOpenUpdateModal = (movie) => {
    setSelectedMovie(movie);
    setComments(movie.comments);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedMovie(null);
    setComments('');
    setShowUpdateModal(false);
    fetchFavoriteMovies();
  };

  const handleUpdateComments = async (e) => {
    e.preventDefault()
    console.log(e.target.comment.value);
    await axios.put(
      `${process.env.REACT_APP_SERVER_URL || "https://onlineserver-oznu.onrender.com"}/update/${selectedMovie.id}`,
      { comments:e.target.comment.value }
    );
    handleCloseUpdateModal();
  };

  const UpdateModal = () => {
    return (
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* onChange={(e) => setComments(e.target.value)} */}
        <form onSubmit={handleUpdateComments}>
          <input type="text"  name='comment' />
          <Button type='submit' variant="primary">Update</Button>

        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>Cancel</Button>
          {/* <Button variant="primary" onClick={(e)=>handleUpdateComments(e)}>Update</Button> */}
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <h1>Favorite List</h1>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <Card key={movie.id} className="movie-card">
            <div className="poster-wrapper">
              <Card.Img className="poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <Card.Body>
              <Card.Title className="title">{movie.title}</Card.Title>
              <Card.Text className="text">
                <div className="comments">Comment: {movie.comments}</div>
              </Card.Text>
              <Button variant="danger" onClick={() => handleDeleteMovie(movie.id)}>Delete</Button>
              <Button variant="primary" onClick={() => handleOpenUpdateModal(movie)}>Update</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {showUpdateModal && <UpdateModal />}
      </>
  );
}

export default FavList;
