import "./styles/App.css"
import Home from "./component/Home";
import Brands from "./component/Brands"
import Specialitties from "./component/Specialitties"
import AboutUs from "./component/AboutUs";
import Facts from "./component/Facts";
import SpecialDishes from "./component/SecialDishes";
import Reservations from "./component/Reservations";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Brands />
      <Specialitties />
      <AboutUs />
      <Facts />
      <SpecialDishes />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
