// Foundational
import React from 'react';
import { NavLink } from "react-router-dom";

export const SolucoesConcore = (props) => {
    const { solucoesContent } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center" data-aos="fade-up">
                    <h2>{solucoesContent.topHeading}</h2>
                    <img className="divider2" src={props.gradient} alt="Gradient divider" />
                </div>
                {solucoesContent.items.map((item, key) => {
                    return (
                    <NavLink to={item.link} key={key}>
                        <div className={"bg-"+item.bgClass} data-aos={"fade-"+item.direction}>
                            <div className="row">
                                <div className="col-md-5 text-center">
                                    <div className="img-solucoes">
                                        <img src={item.imgUrl} alt={item.alt} />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h3>{item.subheading}</h3>
                                    <div className="link-area">
                                        <span className="a-style hvr-wobble-vertical">{item.linkArea}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    );
                })}
            </div>
        </div>
    )
};