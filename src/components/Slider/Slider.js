import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const slider = [`${process.env.PUBLIC_URL}/img/SL1.jpg`, `${process.env.PUBLIC_URL}/img/SL2.png`, `${process.env.PUBLIC_URL}/img/SL3.jpg`, `${process.env.PUBLIC_URL}/img/SL4.jpg`];

function Slider(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>

            <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginTop: 'var(--height-header)' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider[0]}
                        alt="First slide"
                        width='100%'
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider[1]}
                        alt="Second slide"
                        width='100%'
                        height='800px'
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider[2]}
                        alt="Third slide"
                        width='100%'
                        height='800px'
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider[3]}
                        alt="Fouth slide"
                        width='100%'
                        height='800px'
                    />

                    <Carousel.Caption>
                        <h3>Fouth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;


