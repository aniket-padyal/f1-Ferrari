import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CarInfo from "./components/CarInfo.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarInfo />
    </main>
  );
};

export default App;
