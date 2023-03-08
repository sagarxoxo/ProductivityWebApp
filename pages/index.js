import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const navData = [
    { title: "Time Block", url: "timeblock" },
    { title: "Habit Chain", url: "habitchain" },
  ];
  return (
    <div>
      <Container>
        <Row>
          {navData.map((data) => {
            <Col lg={3}>
              <div>
                <h2>
                  <a>{data.title}</a>
                </h2>
              </div>
            </Col>;
          })}
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
