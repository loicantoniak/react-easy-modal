import React, { useState } from "react";
import ReactEasyModal from "./components/ReactEasyModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click</button>
      <ReactEasyModal show={showModal} onHide={() => setShowModal(false)}><p>Create !</p></ReactEasyModal>
    </div>
  );
}

export default App;
