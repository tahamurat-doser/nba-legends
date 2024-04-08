import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helper/data";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
const CardContainer = () => {
  console.log(data);
  return (
    <div>
      {" "}
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={4}>
          {data.map((item) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="cardTitle">{item.name}</Card.Title>
                </Card.Body>
                <ul className="m-auto">
                    {
                       item.statistics.map((ist) => <li className="list-unstyled h5 text-start">🏀{ist}</li> )
                    }
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default CardContainer;
