import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
function App() {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header />
        <ProductList />
    </div>
  );
}

export default App;
