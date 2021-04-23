import react, {Component} from 'react';
import {Form,Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img12 from '../images/img12.jpg';
import emailjs from 'emailjs-com';
import Popup from 'reactjs-popup';

class FormPage extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm("service_g4exuxm", "template_gtpd77g", e.target, "user_UiBZDICaiBiBcD5YXUIZq")
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }
        return(
                // <Form  style={{ backgroundImage:`url(${img12})`, padding:"20px" }}>
                    
                //     <Row>
                //         <Col>
                //             <Form.Group controlId="formBasicPassword">
                //                 <Form.Label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Full Name</Form.Label>
                //                 <Form.Control type="text" placeholder="Enter Your Name" />
                //             </Form.Group>
                //         </Col>
                //         <Col>
                //             <Form.Group controlId="formBasicPassword">
                //                 <Form.Label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Your Location</Form.Label>
                //                 <Form.Control type="text" placeholder="City/Village" />
                //             </Form.Group>
                //         </Col>
                //     </Row>
                //     <Row>
                //         <Col>
                //             <Form.Group controlId="formBasicPassword">
                //                 <Form.Label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Contact Number</Form.Label>
                //                 <Form.Control type="text" placeholder="Enter Your Phone Number" />
                //             </Form.Group>
                //         </Col>
                //         <Col>
                //             <Form.Group controlId="formBasicEmail">
                //                 <Form.Label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Email address</Form.Label>
                //                 <Form.Control type="email" placeholder="Enter Your Email" />
                //                 <Form.Text className="text-muted" style={{ color:"#42aaf5", fontFamily:"TimesNewRoman" }}>
                //                 We'll never share your email with anyone else.
                //                 </Form.Text>
                //             </Form.Group>
                //         </Col>
                //     </Row>
                //     <Form.Group controlId="formBasicPassword">
                //                 <Form.Label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Requirement</Form.Label>
                //                 <Form.Control type="text" placeholder="Enter Your Requirement Details" />
                //     </Form.Group>

                //     <Form.Group controlId="formBasicCheckbox">
                //         <Form.Check type="checkbox" label="Check me out" />
                //     </Form.Group>
                //     <Button variant="primary" type="submit">
                //         Submit
                //     </Button>
                // </Form>
                <Form className="contact-form" onSubmit={sendEmail} style={{ backgroundImage:`url(${img12})`, padding:"40px",paddingLeft:"80px"}}>
                    <input type="hidden" name="contact_number" />
                    <label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman",paddingRight:"43px" }}>Full Name :&nbsp;</label>
                    <input type="text" name="from_name" style={{width:"50%"}}/> <br />
                    <label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" ,paddingRight:"10px"}}>Location / Area :&nbsp; </label>
                    <input type="text" name="from_address" style={{width:"50%"}}/> <br />
                    <label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Conatct Number :&nbsp; </label>
                    <input type="text" name="from_ContactNumber" style={{width:"50%"}}/>  <br />
                    <label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman",paddingRight:"49px"}}>Email ID : &nbsp;</label>
                    <input type="email" name="from_email" style={{width:"50%"}}/> <br />
                    <label style={{ color:"#42aaf5", fontWeight:"bolder", fontFamily:"TimesNewRoman" }}>Requirement / Message :&nbsp; </label>
                    <textarea name="message" style={{width:"100%", height:"100px"}}/> <br />
                    <Popup trigger={<input type="submit" value="Send"  style={{marginLeft:"0%"}}/>} position="right">
                        <div style={{color:"red", fontWeight:"bolder",backgroundColor:"white", marginLeft:"30px"}}>*** &nbsp; Form submitted successfully !! &nbsp; ***</div>
                    </Popup>
                    {/* <input type="submit" value="Send"  style={{marginLeft:"45%"}}/> */}
              </Form>
        )
    }
}

export default FormPage