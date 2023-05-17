import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './ModalMovie.css';

function ModalMovie(props) {
  const { show, handleClose, movie, onMovieAdded } = props;
  const [comments, setComment] = useState('');
  const handleSubmit = async () => {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL || "https://onlineserver-oznu.onrender.com"}/getMovies`;
      const data = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        comments: comments
      };
      await axios.post(serverUrl, data);
      handleClose();
      onMovieAdded();
     };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <Form.Control
          type="text"
          placeholder="Add a comment..."
          value={comments}
          onChange={(event) => setComment(event.target.value)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button className="custom-btn" variant="primary" onClick={handleSubmit}>Add to favorites</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
