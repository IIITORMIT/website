import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from './assets/12345.jpg';
import dforestImg from './assets/54321.jpg';


export default class CarouselBox extends Component {
  render() {
    return (
     <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={forestImg}
              alt="forest"
            />
            <Carousel.Capton>
                <h3>Forest image<h3/>
                <p>Lorem ipsum dolor, sit amet consectetur adipsicing elit. Quidem? est?<p/>
            </Carousel.Capton>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={dforestImg}
              alt="forest"
            />
            <Carousel.Capton>
                <h3>Dark Forest image<h3/>
                <p>Lorem ipsum dolor, sit amet consectetur adipsicing elit. Quidem? est?<p/>
            </Carousel.Capton>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={forestImg}
              alt="forest"
            />
            <Carousel.Capton>
                <h3>Forest image<h3/>
                <p>Lorem ipsum dolor, sit amet consectetur adipsicing elit. Quidem? est?<p/>
            </Carousel.Capton>
        </Carousel.Item>
     </Carousel>
    )
  }
}
