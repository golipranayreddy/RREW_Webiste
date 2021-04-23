// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import HomePageHeader from "./components/HomePageHeader";
import Carosel from './components/Carosel';
import Cards from "./components/Cards";
import Clients from "./components/Clients";
import PortBox from "./components/PortBox";
import AdminPage from "./components/AdminPage"
import Jumbotron from 'react-bootstrap/Jumbotron';
import bg1 from './images/bg1.jpg';



function App() {
  return (
    // style={{ backgroundImage:`url(${bg1})` }}
    <div className="App" style={{ backgroundImage:`url(${bg1})` }}>
      <HomePageHeader />
      <Carosel style={{marignBottom:"30px"}}/>
      <Cards/>
      <Clients/>
      <PortBox/>
    </div>
  );
}

export default App;
