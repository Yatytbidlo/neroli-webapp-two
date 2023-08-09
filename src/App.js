import './App.css';
import {useEffect, useState} from "react";
const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }

  return (
    <div className="App">
     test
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
