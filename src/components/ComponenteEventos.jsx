import React, { Component } from 'react';

class ComponenteEventos extends Component {
    constructor(props) {
        super(props);    
        this.state = { text: '' };
    }
    
    manejarPulsacionesTeclado = (event) => {
        this.setState((prevState) => ({       
            text: prevState.text + event.key
          }));
    }

    manejarDown = (event) => {
        if (event.keyCode === 8 && this.state.text) {
            this.setState((prevState) => ({       
                text: prevState.text.slice(0, -1)
            }));
        }
    }

    render() {
        return (
            <div className="App">
              <header>
                <h1>Eventos en React</h1>
          
                <input type="text" onKeyPress={this.manejarPulsacionesTeclado} onKeyDown={this.manejarDown} />
              </header>
              <p>Text: {this.state.text}</p>
            </div>
          );
    }
}

export default ComponenteEventos;