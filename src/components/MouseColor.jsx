import React, { Component } from 'react';

class MouseColor extends Component {
    constructor(props) {
        super(props);    
        this.state = { colors: ['primary', 'warning', 'alert'], position: 0, stopColor: false };
        this.containerRef = React.createRef();
    }
    
    capturarRaton = () => {
        if (!this.state.stopColor) {
            this.setState((prevState) => ({       
                position: (prevState.position + 1)%prevState.colors.length
            }));
        }
    }

    stopColor = (event) => {
        this.setState(() => ({       
            stopColor: true
        }));
    }

    render() {
        return (
            <p className={this.state.colors[this.state.position]} ref={this.containerRef} onMouseMove={this.capturarRaton} onDoubleClick={this.stopColor}>
                
            </p>
          );
    }
}

export default MouseColor;