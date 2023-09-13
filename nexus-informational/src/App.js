import './App.css';
import Footer from './component/layout/Footer';
import Home from './components/home';
import About from './components/about ';
import Navbar from './components/Navigationbar';



function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
