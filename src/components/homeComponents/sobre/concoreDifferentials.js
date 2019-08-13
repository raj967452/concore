import React from 'react';

export const ConcoreDifferentials = (props) => {
    const {diffBlokContent} = props;
    return (
        <div className="col-md-4 text-center" data-aos="fade-up">
            <div className="box-df">
                <div className="div-img">
                    <img src={diffBlokContent.imgUrl} alt={diffBlokContent.alt} />
                </div>
                <hr className="hr-g" />
                <p dangerouslySetInnerHTML={{ __html: diffBlokContent.content }} />
            </div>
        </div>
    )
}