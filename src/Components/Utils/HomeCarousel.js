import React from 'react';
import {Carousel} from "react-bootstrap"
import i1 from "../assets/car1.jpg"
import i2 from "../assets/car2.jpg"
import i3 from "../assets/car3.jpg"
import "../styles/HomeCarousal.css"

export default function HomeCarousel() {
    return (
        <div className="carousal">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={i1} alt="First slide" height='500' width='50'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={i2} alt="Third slide" height='500' width='200'/>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={i3} alt="Third slide" height='500' width='200' />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
