import React from 'react';

export default function ListaNumeros(props) {
    const data = props.data;
    const listItems = data.map((elem) =>
        <li className="text-left">{elem}</li>
    );

    return(
        <ul className="list-group">{listItems}</ul>        
    );
}