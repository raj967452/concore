import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faColors from '../scss/variables.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ErrorBoundary from '../components/util/ErrorBoundary';

//import topBanner from '../data/banner';

import {Banner, SobreBlock} from '../components/homeComponents';

const topBanner = {
    title: "A revolucao no <br /><b>desenvolvimento</b><br />de inovacao digital.", 
    imgUrl: "https://i.ibb.co/gRMwFYG/bannerhome-2.png", 
    description: "Projeto e desenvolvimento de software prático, eficiente<br />e dentro do orçamento." 
}

const sobreBlock = {
    title: "Grande parte dos projetos de software falham em custo, prazo<br />ou valor entregue.", 
    imgUrl: "https://i.ibb.co/gSThfmR/img-section-about.png", 
    description : `<p>A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológica
    acessível para todas as empresas.</p><p><b>Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.</b></p><p>
    Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos de softwares que atendem fielmente as regras do seu negócio.</p>`
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerSlot1: topBanner,
            sobre: sobreBlock
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
                    <SobreBlock sobre={this.state.sobre} />                                
                </ErrorBoundary>
                <section className="sobre" ref={this.sobreRef} >
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img className="img-width" src="https://i.ibb.co/gSThfmR/img-section-about.png" alt="Concore" />
                            </div>
                            <div className="col-md-7">
                                <h2>Grande parte dos projetos de software falham em custo, prazo<br />ou valor entregue.</h2>
                                <img className="divider1" src="https://i.ibb.co/wCJj8hV/divider-gradient.png" alt="Gradient divider" />
                                <p>
                                    A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológica
                                    acessível para todas as empresas.</p>
                                <p>
                                    <b>Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.</b>
                                </p>
                                <p>
                                    Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos de
                                    softwares que atendem fielmente as regras do seu negócio.</p>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">    
                            <div className="col-md-12 text-center" data-aos="fade-down">
                                <h2 className="title-d">Os diferenciais Concore para fazer seu negócio crescer.</h2>
                                <img className="divider2" src="https://i.ibb.co/wCJj8hV/divider-gradient.png" alt="Gradient divider" />
                            </div>
                            <div className="col-md-4 text-center" data-aos="fade-up">
                                <div className="box-df">
                                    <div className="div-img">
                                        <img src="https://i.ibb.co/8PmrT6f/4x.png" alt="4x mais rápido" />
                                    </div>
                                    <hr className="hr-g" />
                                    <p>Tecnologia própria que nos permite desenvolver de forma mais eficiente e rápida, <strong>economizando
                preciosos recursos.</strong></p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center" data-aos="fade-up">
                                <div className="box-df">
                                    <div className="div-img mg-top">
                                        <img src="https://i.ibb.co/FWYQbYc/squad.png" alt="Squad de inovação" />
                                    </div>
                                    <hr className="hr-g" />
                                    <p><strong>Nossa equipe respira tecnologia e inovação há mais de 10 anos,</strong> gerando soluções
              assertivas e práticas.</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center" data-aos="fade-up">
                                <div className="box-df">
                                    <div className="div-img mg-top">
                                        <img src="https://i.ibb.co/GxtsCRc/datadriven.png" alt="Data driven" />
                                    </div>
                                    <hr className="hr-g" />
                                    <p>Criamos estimativas técnicas com base em dados científicos, <strong>gerando assertividade.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="solucoes">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center" data-aos="fade-up">
                                <h2>Soluções Concore</h2>
                                <img className="divider2" src="https://i.ibb.co/wCJj8hV/divider-gradient.png" alt="Gradient divider" />
                            </div>
                            <div className="col-md-12">
                                <NavLink to="/sprintzero">
                                    <div className="bg-sprint" data-aos="fade-left">
                                        <div className="row">
                                            <div className="col-md-5 text-center">
                                                <div className="img-solucoes">
                                                    <img src="https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png" alt="Sprint zero" />
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <h3>Comece transformando a sua ideia em um projeto de software completo e com protótipo navegável.</h3>
                                                <div className="link-area">
                                                    <span className="a-style hvr-wobble-vertical">Saiba mais</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/innovationsquad">
                                    <div className="bg-innovation" data-aos="fade-right">
                                        <div className="row">
                                            <div className="col-md-5 text-center">
                                                <div className="img-solucoes">
                                                    <img src="https://i.ibb.co/fpWvVKS/logo-innovationsquad.png" alt="Innovation squad" />
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <h3>Tenha a disposição uma equipe sênior para projeto e desenvolvimento do seu software.</h3>
                                                <div className="link-area">
                                                    <span className="a-style hvr-wobble-vertical">Saiba mais</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="slider-concore" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2>Confira o impacto das soluções Concore para seus clientes.</h2>
                                    <img className="divider2" src="https://i.ibb.co/wCJj8hV/divider-gradient.png" alt="Gradient divider" />
                                </div>
                                <div className="col-md-12">
                                    <div id="carouselConcore" className="carousel slide" data-ride="carousel" data-interval="10000">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src="https://i.ibb.co/2Ykg2yD/case-ingresse.png" alt="Concore" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4>Cliente: Ingresse S.A</h4>
                                                        <h3>Diminuinos o tempo de repasses financeiros de horas para minutos.</h3>
                                                        <p>
                                                            Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e
                                                            gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que
                                                            resultava
                                                            em eventuais erros, perdas e dificuldade de gestão em grande volume.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src="assets/images/home/case-ingresse.png" alt="Concore" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4>Cliente: Ingresse S.A</h4>
                                                        <h3>Diminuinos o tempo de repasses financeiros de horas para minutos.</h3>
                                                        <p>
                                                            Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e
                                                            gestão de repasses financeiros. O processo de repasse era realizado por planilhas, o que
                                                            resultava
                                                            em eventuais erros, perdas e dificuldade de gestão em grande volume.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev car-control" href="#carouselConcore" role="button" data-slide="prev">
                                            <FontAwesomeIcon icon={['fas', 'chevron-left']} size="3x" color={faColors.faArrow} />
                                        </a>
                                        <a className="carousel-control-next car-control" href="#carouselConcore" role="button" data-slide="next">
                                            <FontAwesomeIcon icon={['fas', 'chevron-right']} size="3x" color={faColors.faArrow} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default HomePage;
