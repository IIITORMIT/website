import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Media, Row, Col, Container, ListGroup, Card } from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
     <Container>
      <Row>
        <Col md="g">
          <Media className="m-5">
            <img
            width={150}
            height={150}
            className="mr-3"
            src="https://res.cloudinary.com/teepublic/image/private/s--P4QZG89a--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1542411723/production/designs/3517883_0.jpg"
            />
            <Media.Body>
              <h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  recusandae quos quae labore mumquam adipisisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste,blanditiis
                  architecto sequi sit, dignissimos unde comque?
                </p>
              </h5>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
            width={150}
            height={150}
            className="mr-3"
            src="https://res.cloudinary.com/teepublic/image/private/s--P4QZG89a--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1542411723/production/designs/3517883_0.jpg"
            />
            <Media.Body>
              <h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  recusandae quos quae labore mumquam adipisisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste,blanditiis
                  architecto sequi sit, dignissimos unde comque?
                </p>
              </h5>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
            width={150}
            height={150}
            className="mr-3"
            src="https://res.cloudinary.com/teepublic/image/private/s--P4QZG89a--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1542411723/production/designs/3517883_0.jpg"
            />
            <Media.Body>
              <h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  recusandae quos quae labore mumquam adipisisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste,blanditiis
                  architecto sequi sit, dignissimos unde comque?
                </p>
              </h5>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
            width={150}
            height={150}
            className="mr-3"
            src="https://res.cloudinary.com/teepublic/image/private/s--P4QZG89a--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1542411723/production/designs/3517883_0.jpg"
            />
            <Media.Body>
              <h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  recusandae quos quae labore mumquam adipisisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste,blanditiis
                  architecto sequi sit, dignissimos unde comque?
                </p>
              </h5>
            </Media.Body>
          </Media>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">
            Categories
          </h5>
          <Card>
            <ListGroup.Blog variant="flush">
               <ListGroup.Item>
                HTML/CSS
               </ListGroup.Item>
               <ListGroup.Item>
                JavaScript
               </ListGroup.Item>
               <ListGroup.Item>
                Pyton
               </ListGroup.Item>
               <ListGroup.Item>
                Java
               </ListGroup.Item>
               <ListGroup.Item>
                C++
               </ListGroup.Item>
            </ListGroup.Blog>
          </Card>

          <Card className="mt-3" bg="light">
            <Card.Body>
              <Card.Title>
                Side Widget
              </Card.Title>
              <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  recusandae quos quae labore mumquam adipisisci sapiente vero!
                  Non distinctio eos eveniet necessitatibus iste,blanditiis
                  architecto sequi sit, dignissimos unde comque?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     </Container>
    )
  }
}
