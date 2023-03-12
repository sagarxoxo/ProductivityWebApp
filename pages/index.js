import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const navData = [
    { title: "Time Block", url: "timeblock" },
    { title: "Habit Chain", url: "habitchain" },
  ];
  return (
    <div>
      <Container>
        <h2 className="text-center mt-5 mb-5">All Productivity Tools</h2>
        <Row>
          {navData.map((data, index) => {
            return (
              <Col lg={2} key={index}>
                <Link href={data.url}>
                  <div className="home-card">
                    <h2>{data.title}</h2>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
