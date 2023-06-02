import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
const BookTicket = () => {
    const { id } = useParams();
    const loadData = useLoaderData();
    const findData = loadData.find((data) => data.show.id == id);
    const navigate = useNavigate();
    const handleSubmit =e=>{
        e.preventDefault()
        toast("Book Your Ticket!")
        navigate('/')
    }
    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-4">Book Ticket : {findData?.show?.name}</h2>
            <div>
            <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control placeholder="Your name" />
        </Col>
        <Col>
          <Form.Control placeholder="Your Email"/>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Control placeholder="day" value={findData?.show?.schedule?.days[0]}/>
        </Col>
        <Col>
          <Form.Control placeholder="time" value={findData?.show?.schedule?.time}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="First name" value={findData?.show?.premiered } />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" value={findData.score}/>
        </Col>
      </Row>
      <Button type="submit" onClick={handleSubmit} className="mt-4">confirm book</Button>
    </Form>
            </div>
        </div>
    );
};

export default BookTicket;