import React, { Component } from 'react';
import { Container, Nav, Tab, Row, Col} from 'react-bootstrap';



export default class About extends Component {
  render() {
    return (
     <Container>
       <Tab.Container id="ledt-tabs-example" defaultActivKey="first">
         <Row>
           <Col sm={3}>
            <Nav variant="pills" className="flex-column" mt-2>
              <Nav.Item>
                <Nav.Link eventKey="first">Design</Nav.Link>
              <Nav.Item/>
              <Nav.Item>
                <Nav.Link eventKey="second">Team</Nav.Link>
              <Nav.Item/>
              <Nav.Item>
                <Nav.Link eventKey="third">Programming</Nav.Link>
              <Nav.Item/>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
              <Nav.Item/>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
              <Nav.Item/>
            </Nav>
           </Col>
           <Col sm={9}>
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first">
                 <img src="https://s3-alpha.figma.com/hub/file/896723794/37335f37-0135-4868-bd3a-01a364d7c3f5-cover.png"/>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quo laboratore repellendus nesciunt doloribus minima
                  assusantium! Unde, doloremque figiat sint laudantium
                  aspernatur modi?
                 </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                 <img src="https://www.rswebsols.com/wp-content/uploads/2021/08/software-developers-team-building-business-coworkers.jpg"/>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quo laboratore repellendus nesciunt doloribus minima
                  assusantium! Unde, doloremque figiat sint laudantium
                  aspernatur modi?
                 </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                 <img src="https://raw.githubusercontent.com/eramax/myBlogStorage/master/public/uploads/2018/05/js-frameworks.jpg"/>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quo laboratore repellendus nesciunt doloribus minima
                  assusantium! Unde, doloremque figiat sint laudantium
                  aspernatur modi?
                 </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fiftch">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVQt85qq1Wn0VMd2gSrnBm1UtPQClne_bDw&usqp=CAU"/>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quo laboratore repellendus nesciunt doloribus minima
                  assusantium! Unde, doloremque figiat sint laudantium
                  aspernatur modi?
                 </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                 <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png"/>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quo laboratore repellendus nesciunt doloribus minima
                  assusantium! Unde, doloremque figiat sint laudantium
                  aspernatur modi?
                 </p>
              </Tab.Pane>
            </Tab.Content>
           </Col>
         </Row>
       </Tab.Container>
      <Container/>
    )
  }
}
