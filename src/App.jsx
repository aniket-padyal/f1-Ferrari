import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CarInfo from "./components/CarInfo.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Art2 from "./components/Art2.jsx";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarInfo />
      <About />
      <Art />
      {/* <Art2 /> */}
    </main>
  );
};

export default App;
