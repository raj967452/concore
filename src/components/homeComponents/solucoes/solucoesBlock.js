// Foundational
import React from 'react';
import { SolucoesConcore } from './solucoesConcore';
import { SliderBlock } from '../../global/slider/sliderblock';


export const SolucoesBlock = (props) => {
    const { solucoes, slider } = props;
    return (
        <section className="solucoes">
            <div className="container">
                <SolucoesConcore solucoesContent={solucoes.solucoes} gradient={solucoes.gradientImg} />
                <SliderBlock sliderContent={solucoes.slider} gradient={solucoes.gradientImg} />
            </div>
        </section>
    )
};