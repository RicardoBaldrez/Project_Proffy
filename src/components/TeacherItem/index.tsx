import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function Teacheritem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/35501635?s=460&u=619d01bbbfe8056664bbb5a511d9d70342941aa4&v=4" alt="Ricardo Barbosa" />
                <div>
                    <strong>Ricardo Barbosa</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br />
                <br />
                Apaixonado por explodir coisas em laboratório e por muda a vida das pessoas através de experiências. Mas de 200 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button>
                    <img src={whatsAppIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default Teacheritem;