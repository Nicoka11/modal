import { useState } from "react";
import "./App.css";
import Modal from "./components";

function App() {
  const [isOpen, setisOpen] = useState<boolean>(true);

  return (
    <div className="App">
      <Modal
        isOpen={isOpen}
        onClick={() => setisOpen(false)}
      >
        <button>This is a button</button>
      </Modal>
    </div>
  );
}

export default App;
