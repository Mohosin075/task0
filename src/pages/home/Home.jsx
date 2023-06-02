import { Link, useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const Home = () => {
  const loadData = useLoaderData();
  loadData.map((data) => console.log(data.show));
  return (
    <div className="container mt-4 mt-4">
      <Row xs={1} md={2} className="g-4">
      {loadData.map((data, idx) => (
        <Col key={idx}>
          <Card>
            <div className="d-flex h-50 justify-content-center p-4">
            <Card.Img variant="top" className="w-50" src={data.show.image.original} />
            </div>
            <Card.Body>
              <Card.Title>{data?.show?.name}</Card.Title>
              <Card.Text>
                Language : {data?.show?.language}
              </Card.Text>
              <Card.Text>
              Rating : {data?.show?.rating?.average}
              </Card.Text>
              <Card.Text>
              Status : {data?.show?.status}
              </Card.Text>
              <Card.Text>
              Premiered : {data?.show?.premiered}
              </Card.Text>
              <Card.Text>
              Schedule : {data?.show?.schedule?.days[0]} | time : {data?.show?.schedule?.time}
              </Card.Text>
              <Button  ><Link className="text-light text-decoration-none" to={`/details/${data?.show?.id}`}>Show Details</Link></Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Home;
