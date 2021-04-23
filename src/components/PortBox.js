import react, {Component} from 'react';
import img1 from '../images/img1.jpg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "../CSS/PortBox.css";
import { Jumbotron } from 'react-bootstrap';
import bg1 from '../images/bg1.jpg';
class PortBox extends Component{
    render(){
        return(   
            // style={{backgroundColor:"black"}}
            <div className = "PortBox">          
                <div className="row">
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* style={{backgroundColor:"black"}} */}
                <div className="row">
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <img src={img1} alt="Avatar" className="image"/>
                            <div className="overlay">
                                <div className="text">Click here!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default PortBox