import React, { Component } from 'react';
import Pilas from './Pilas';
import Baterias from './Baterias';

class Articulo extends Component{
  render() {
    return (<div>
      <Pilas />
      <p>
        A pesar del auge de las energias renovables, las pilas convencionales siguen utilizandose a diario.
      </p>
      <Baterias />
      <p>
          Gracias a las nuevas tecnologias que afectan a las baterías, la autonomía de los coches eléctricos está aumentando a pasos agigantados.
        </p>
    </div>)
  }
}

export default Articulo;