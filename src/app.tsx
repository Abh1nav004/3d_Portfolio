import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About } from './components/about';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Feedbacks } from './components/feedbacks';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Tech } from './components/tech';
import { Works } from './components/works';

import Banner from "./components/banner";
import Footer from "./components/footer";
import { StarsCanvas } from "./components";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
