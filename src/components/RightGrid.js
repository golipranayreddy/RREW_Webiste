import react, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class RightGrid extends Component{
    render(){
        return(
            <div>
                <Container style ={{width:"80%"}}>
                    <Row>
                        
                        <Col xs={8} style={{color:"black",backgroundColor:"white"}}>
                            <h2>{this.props.name}</h2>
                            <p>{this.props.body}</p>
                        </Col>
                        <Col xs = {4} style={{color:"black"}}>
                            <div className="shadows-courses">
                                <img src={this.props.image} style={{width:"100%"}}/>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default RightGrid;