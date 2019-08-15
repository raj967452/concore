import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faColors from '../scss/variables.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ErrorBoundary from '../components/util/ErrorBoundary';

//import topBanner from '../data/banner';

import { Banner, SobreBlock, SolucoesBlock } from '../components/homeComponents';
import { SliderBlock } from '../components/global/slider/sliderblock';

const topBanner = {
    title: "A revolucao no <br /><b>desenvolvimento</b><br />de inovacao digital.",
    imgUrl: "https://i.ibb.co/gRMwFYG/bannerhome-2.png",
    description: "Projeto e desenvolvimento de software prático, eficiente<br />e dentro do orçamento."
}

const sobreBlock = {
    title: "Grande parte dos projetos de software falham em custo, prazo<br />ou valor entregue.",
    imgUrl: "https://i.ibb.co/gSThfmR/img-section-about.png",
    description: `<p>A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológica
    acessível para todas as empresas.</p><p><b>Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.</b></p><p>
    Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos de softwares que atendem fielmente as regras do seu negócio.</p>`
}

const diffeBlock = {
    topHeading: 'Os diferenciais Concore para fazer seu negócio crescer.',
    items: [
        {
            imgUrl: 'https://i.ibb.co/8PmrT6f/4x.png',
            alt: '4x mais rápido',
            content: `<p>Tecnologia própria que nos permite desenvolver de forma mais eficiente e rápida, <strong>economizando
            preciosos recursos.</strong></p>`
        },
        {
            imgUrl: 'https://i.ibb.co/FWYQbYc/squad.png',
            alt: 'Squad de inovação',
            content: `<strong>Nossa equipe respira tecnologia e inovação há mais de 10 anos,</strong> gerando soluções
            assertivas e práticas.`
        },
        {
            imgUrl: 'https://i.ibb.co/GxtsCRc/datadriven.png',
            alt: 'Data driven',
            content: `Criamos estimativas técnicas com base em dados científicos, <strong>gerando assertividade.</strong>`
        }
    ]
}

const solucoes = {
    topHeading: "Soluções Concore",
    items: [
        {
            imgUrl: "https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png",
            alt: "Sprint zero",
            link: "/sprintzero",
            subheading: "Comece transformando a sua ideia em um projeto de software completo e com protótipo navegável.",
            linkArea: "Saiba mais",
            bgClass: "sprint",
            direction: "left"
        },
        {
            imgUrl: "https://i.ibb.co/fpWvVKS/logo-innovationsquad.png",
            alt: "Innovation squad",
            link: "/innovationsquad",
            subheading: "Tenha a disposição uma equipe sênior para projeto e desenvolvimento do seu software.",
            linkArea: "Saiba mais",
            bgClass: "innovation",
            direction: "right"
        }        
    ]
}

const slider = {
    topHeading: "Confira o impacto das soluções Concore para seus clientes.",
    items: [
        {
            imgUrl: "https://i.ibb.co/2Ykg2yD/case-ingresse.png",
            alt: "Concore",
            slidHeadingH4: "Cliente: Ingresse S.A",
            slidHeadingH3: "Diminuinos o tempo de repasses financeiros de horas para minutos.",
            content: "Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume."
        },
        {
            imgUrl: "https://i.ibb.co/2Ykg2yD/case-ingresse.png",
            alt: "Concore",
            slidHeadingH4: "Cliente: Ingresse S.A",
            slidHeadingH3: "Diminuinos o tempo de repasses financeiros de horas para minutos.",
            content: "Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume."
        }        
    ]
}

/* content will be dynamic with api but for presentation purpose, we are using static Const*/

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerSlot1: topBanner,
            sobreBlock: {
                sobre: sobreBlock,
                differentialsBlock: diffeBlock,
                gradientImg: 'https://i.ibb.co/wCJj8hV/divider-gradient.png'
            },
            solucoesBlock: {
                solucoes: solucoes,
                slider: slider,
                gradientImg: 'https://i.ibb.co/wCJj8hV/divider-gradient.png'
            }
        }
        this.sobreRef = React.createRef();
    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Banner banner={this.state.bannerSlot1} scrollRef={this.sobreRef} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <section className="sobre" ref={this.sobreRef}>
                        <SobreBlock sobre={this.state.sobreBlock} />
                    </section>
                </ErrorBoundary>
                <ErrorBoundary>
                    <SolucoesBlock solucoes={this.state.solucoesBlock} />
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}
export default HomePage;
