import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  //сделал на быструю руку так как дали 4-6 часов , не судите строго
  //еще указано в гх что я развернул проект две недели назад, но я начал делать его только сегодня, по семейным обстоятельствам не получилось начать его ранее
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
