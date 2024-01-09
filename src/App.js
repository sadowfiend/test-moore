import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  //сделал на быструю руку так как дали 4-6 часов , не судите строго
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
