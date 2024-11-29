import { Container, Row, Col } from "react-bootstrap"

const MyFooter =()=> {
    return (
        <div>
        <Container className="text-light">
            <Row>
                <Col><p>Audio and Subtitles</p></Col>
                <Col><p>Media Center</p></Col>
                <Col><p>Privacy</p></Col>
                <Col><p>Contact Us</p></Col>
            </Row>
            <Row>
                <Col><p>Audio Description</p></Col>
                <Col><p>Investor Relators</p></Col>
                <Col><p>Legal Noticies</p></Col>
                <Col><p>Legal Noticies</p></Col>
                
            </Row>
            <Row>
                <Col><p>Help Center</p></Col>
                <Col><p>Jobs</p></Col>
                <Col><p>Cookie Preferences</p></Col>
                <Col><p>Cookie Preferences</p></Col>
            
            </Row>
            <Row>
                <Col><p>Gift Cards</p></Col>
                <Col><p>Terms Of Use</p></Col>
                <Col><p>Corporate Information</p></Col>
                <Col><p>info</p></Col>
            </Row>
           
        </Container>
       <Row>
        <Col>
        <p> © 1997/2019 Netflix.Inc OCxc78 </p>
        </Col>
       </Row>
        </div>

        
    
    )
}
export default MyFooter