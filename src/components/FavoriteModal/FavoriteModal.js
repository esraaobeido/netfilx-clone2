import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FavoriteModal({ show, handleClose, comments, handleUpdateComments, handleCommentsChange }) {
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" value={comments} onChange={handleCommentsChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleUpdateComments}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FavoriteModal;
