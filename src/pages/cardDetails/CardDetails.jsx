import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardDetails = () => {
  const { id } = useParams();
  const loadData = useLoaderData();
  const findData = loadData.find((data) => data.show.id == id);
  console.log(findData);
const {show} = findData
const {name, language , rating, status, premiered, schedule, image,summary, officialSite, type, runtime, } = show;
  return (
    <div className="container">
      <Card>
        <Card.Header as="h5">Details</Card.Header>
        <Card.Body>
          <div className="row">
          <div className="py-4 d-flex flex-column flex-md-row justify-content-md-around">
            <div className="col-12 col-md-5">
            <Card.Img variant="top" className="mb-4" src={image?.original} />
            </div>
            <div className="col-12 col-md-5">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Language : {language}
          </Card.Text>
          <Card.Text>
          status : {status}
          </Card.Text>
          <Card.Text>
          premiered : {premiered}
          </Card.Text>
          <Card.Text>
          average : {rating?.average}
          </Card.Text>
          <Card.Text>
          type : {type}
          </Card.Text>
          <Card.Text>
          score : {findData?.score}
          </Card.Text>
          <Card.Text>
          runtime : {runtime}
          </Card.Text>
          <Card.Text>
          schedule : {schedule?.days[0]} | time : {schedule?.time}
          </Card.Text>
          <Card.Text>
          officialSite : <a href={`${officialSite}`}>{officialSite}</a>
          </Card.Text>
          <div>
          <Card.Text>
          {summary}
          </Card.Text>
          </div>
          <Button variant="primary" className="mt-4"><Link className="text-white" to={`/ticketBook/${id}`}>Book Ticket</Link></Button>
            </div>
          </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetails;
