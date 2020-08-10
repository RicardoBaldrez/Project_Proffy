import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import api from '../../services/api';

import logoImg from "../../assets/images/logo.svg"; // Criando uma variável js contendo o logo
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import './styles.css';

function Landing() {
    const [ totalConnections, setTotalConnections ] = useState(0); // usando 'estado' pois sempre que precisarmos ficar com um valor, utilizamos dessa forma

    useEffect(() => {
        api.get('connections').then(response => {
            
            const { total } = response.data;
            
            setTotalConnections(total);
            
        });
        
    }, []) // useEffect -> Primeiro param é um função e segundo param é um array de dependências(Passa-se as informações que quando forem alteradas, será executado a função do primeiro param, o valor vazio representa o carregamento da página, ou sej, quando carregar será feito uma requisição a api
    
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de { totalConnections } conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;