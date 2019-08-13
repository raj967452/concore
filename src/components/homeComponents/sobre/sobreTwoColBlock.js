// Foundational
import React from 'react';

export const SobreTwoColBlock = (props) => {
    const { blockContent } = props;
    return (
        <div className="row" data-aos="fade-up">
            <div className="col-md-5">
                <img className="img-width" src={blockContent.imgUrl} alt="Concore" />
            </div>
            <div className="col-md-7">
                <h2 dangerouslySetInnerHTML={{ __html: blockContent.title }} />
                <img className="divider1" src={props.gradient} alt="Gradient divider" />
                <div dangerouslySetInnerHTML={{ __html: blockContent.description }} />
            </div>
        </div>
    );
}