import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faColors from '../../../scss/variables.scss';
import Carousel from 'react-bootstrap/Carousel'


export const SliderBlock = (props) => {
    const { sliderContent } = props;
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const { interval } = 5000;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div className="slider-concore" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>{sliderContent.topHeading}</h2>
                        <img className="divider2" src={props.gradient} alt="Gradient divider" />
                    </div>
                    <div className="col-md-12">
                        <Carousel
                            activeIndex={index}
                            direction={direction}
                            onSelect={handleSelect}
                            id="carouselConcore"
                            interval={interval}
                            >
                            {sliderContent.items.map((item, index) => {
                                return (
                                    <Carousel.Item >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={item.imgUrl} alt={item.alt} />
                                            </div>
                                            <div className="col-md-6">
                                                <h4>{item.slidHeadingH4}</h4>
                                                <h3>{item.slidHeadingH3}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}