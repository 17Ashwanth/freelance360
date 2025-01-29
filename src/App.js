import './App.css';
import AboveFt from './Components/AboveFt';
import Benefits from './Components/Benefits';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import How from './Components/How';
import Insights from './Components/Insights';
import Price from './Components/Price';
import Reviews from './Components/Reviews';
import Service from './Components/Service';
import Trade from './Components/Trade';
import Modal1 from './Components/Modal1'
import Modal2 from './Components/Modal2'  

function App() {

  return (
    <>
   {/*  <Modal1 /> */}
    <Header/>
    <Home/>
    <How/>
    <Service/>
   {/*  <Modal2 /> */}
    <Benefits/>
    
    <Price/>
    <Trade/>
    {/* <Modal2 /> */}
    <Reviews/>
    <Insights/>
   {/*  <Modal2 /> */}
    <AboveFt/>
    <Footer/>
    </>
  );
}

export default App;
