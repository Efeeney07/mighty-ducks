import React from "react";
import InputBar from '../components/searchBar'
import Calender from '../components/calendar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  console.log("At Home");
  return (
    <body>
      <div className="background">
      <Card>
        <InputBar />
        <Calender />
      </Card>
      <Container>
        <Row>
          <Col>
            <img
              className="centerLogo"
              src="wizard_logo.png"
              alt="Wizard Logo"
            />
          </Col>
        </Row>

        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel"
                src="airplane.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3><p>This. is an airplane</p></h3>
                <p>it be flyin</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel"
                src="eavan.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3><p>This. is an eavan</p></h3>
                <p>it be cookin</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel"
                src="mason.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>This. is a mason</h3>
                <p>
                  it be gamin
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <br /><br />
        <Row>
          <h2>Best Prices By City</h2>
        </Row>


        <Row>
          <Col>
            <Card border="primary" style={{
              width: '18rem',
            }}>
              <Card.Img variant="bottom" src="Atlanta.jpg" />
              <Card.ImgOverlay>
                <Card.Title><p>Atlanta</p></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{
              width: '18rem',
            }}>
              <Card.Img variant="bottom" src="New York.jpg" />
              <Card.ImgOverlay>
                <Card.Title><p>New York</p></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{
              width: '18rem',
            }}>
              <Card.Img variant="bottom" src="Los Angeles.jpg" />
              <Card.ImgOverlay>
                <Card.Title><p>Los Angeles</p></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{
              width: '18rem',
            }}>
              <Card.Img variant="bottom" src="Chicago.jpg" />
              <Card.ImgOverlay>
                <Card.Title><p>Chicago</p></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <br /><br /><br />
        <Row>
          <Col>
            <Card style={{
              width: '18rem',
            }}>
              <Card.Img variant="bottom" src="Dallas.jpg" />
              <Card.ImgOverlay>
                <Card.Title><p>Dallas</p></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      </div>
    </body>
  )
}


export default Home;