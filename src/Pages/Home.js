import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Container, CarDeck, Card , Button} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
     <CarouselBox />
     <Container>
      <h2 className="text-center mt-4">
        Our team
      </h2>

      <CarDeck className="m-4">

        <Card bg="warning" border="light">
          <Card.Igm 
          variant="top"
          src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_"
          />
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas fugiant laboriosam dista.
            </Card.Text>
            <Button variant="primary">AAbout team</Button>
          </Card.Body>
        </Card>

        <Card bg="success" border="warning">
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas fugiant laboriosam dista.
            </Card.Text>
            <Button variant="primary">AAbout team</Button>
          </Card.Body>
          <Card.Igm 
          variant="bottom"
          src="https://hgaimpact.com/wp-content/uploads/2021/05/TEAM-Hands-Lightbulb.jpg"
          />
        </Card>

        <Card bg="info" border="success">
          <Card.Igm 
          variant="top"
          src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_"
          />
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas fugiant laboriosam dista.
            </Card.Text>
            <Button variant="primary">AAbout team</Button>
          </Card.Body>
        </Card>
        
      </CarDeck>
     <Container/>
     </>
    )
  }
}
