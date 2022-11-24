import React, { useState } from "react";
import ReactModal from "./Components/ReactModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click</button>
      <ReactModal show={showModal} onHide={() => setShowModal(false)}><p>Create !</p></ReactModal>
    </div>
  );
}

export default App;
