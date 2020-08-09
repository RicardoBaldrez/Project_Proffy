import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './style.css';

// Forma de declarar as propriedades que terão no nosso componente 
interface PageHeaderProps {
    title: string;
    description?: string; // description?: -> Dizendo que a propriedade description é opcional diferente da title 
}

/**
 *  {props.children} -> mostra qual conteúdo foi escrito dentro do componente
 * 
 *  Se a primeira informação for verdadeira/existir, inclua o que vem depois do AND(&&)
 *  { props.description && <p>{props.description}</p> }
 **/ 
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => { // Componente chamado PageHeader, ele é um function component de dentro do react e as propriedades que ele tem são essas(PageHeaderProps)
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{ props.description }</p> }

                {props.children}
            </div>
        </header>
    );
};

export default PageHeader;