import React from 'react';

function ButtonLink(props) {
// props é um objeto
// props => {className: "o que alguém passar", href: "/"}
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; // fazendo a exportação do menu