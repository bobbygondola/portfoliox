import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Mission from './components/Mission'
import About from './components/About'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Mission />
      <About />
      <ContactPage />
    </div>
  );
}

export default App;
