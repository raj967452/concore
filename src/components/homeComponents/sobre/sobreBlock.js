// Foundational
import React from 'react';
import { SobreTwoColBlock } from './sobreTwoColBlock';
import { ConcoreDifferentials } from './concoreDifferentials';

export const SobreBlock = (props) => {
    const { sobre } = props;
    const diffItems = sobre.differentialsBlock;
    return (
        <div className="container">
            <SobreTwoColBlock blockContent={sobre.sobre} gradient={sobre.gradientImg} />
            <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center" data-aos="fade-down">
                    <h2 className="title-d">{sobre.differentialsBlock.topHeading}</h2>
                    <img className="divider2" src={sobre.gradientImg} alt="Gradient divider" />
                </div>
                {diffItems.items.map((blocks, index) => {
                    return (
                        <ConcoreDifferentials key={index} diffBlokContent={blocks} />
                    )
                })}
            </div>
        </div>
    )
};