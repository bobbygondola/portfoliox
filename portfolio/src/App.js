import './styles/css/App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Mission from './components/Mission'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Mission />
      <About />
      <Contact />
    </div>
  );
}

export default App;
