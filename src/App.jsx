import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [isModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!isModal);
  };
  return (
    <div className="App">
      <button onClick={toggleModal}>Click me!</button>
      {isModal && <Modal setToggleModal={toggleModal} />}
    </div>
  );
}

export default App;
