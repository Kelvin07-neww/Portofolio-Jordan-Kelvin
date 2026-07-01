import GlobalBackground from './Layout/GlobalBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import'./Style/index.css'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white antialiased">
      <GlobalBackground /> 
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
 
