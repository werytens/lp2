import React, { useState } from "react";
import Modal from "./Modal";
import ParentComponent from "./ParentComponents";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const link = "http://localhost:4000/test";

  axios.defaults.withCredentials = true;

  axios
    .get(link)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error("Error:", error);
    });

  fetch(link, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal</p>
      </Modal>

      <ParentComponent />
    </div>
  );
}

export default App;
