import "./App.css";
import Cards from "./components/cards/Cards.js";
import Header from "./components/header/Header.js";
import Navbar from "./components/navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
