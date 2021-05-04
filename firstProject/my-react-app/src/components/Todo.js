import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>Title</h2>
      <div className="actions">
        <span>{props.text}</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
