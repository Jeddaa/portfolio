import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import './App.css';
import FeaturedWork from './components/Featured_work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <section className="min-h-screen font-normal text-white bg-slate-800">
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <FeaturedWork />
      <Resume />
      <Contact />
      <Footer />
    </section>
  );
}
export default App;
