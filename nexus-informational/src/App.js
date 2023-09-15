import './App.css';
import Footer from './components/layout/Footer';
import Home from './components/home';
import About from './components/about ';
import Navbar from './components/Navigationbar';


import Team from './components/team';
import Product from './components/Product';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Team/>
      <Footer/>
      
    </div>
  );
}

export default App;
