import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/services/4.svg';
import banner2 from '../../../images/services/2.svg';
import banner3 from '../../../images/services/5.svg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        // style={{ height: '500px' }}
                        className="d-block img-fluid vw-100 vh-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        // style={{ height: '500px' }}
                        className="d-block img-fluid vw-100 vh-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        // style={{ height: '500px' }}
                        className="d-block img-fluid vw-100 vh-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;