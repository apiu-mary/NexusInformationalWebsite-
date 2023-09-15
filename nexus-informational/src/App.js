import './App.css';
import Footer from './components/layout/Footer';
import Home from './components/home';
import About from './components/about ';
import Navbar from './components/Navigationbar';


import Team from './components/team';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <Footer/>
      
    </div>
  );
}

export default App;
