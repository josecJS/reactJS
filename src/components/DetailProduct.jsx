import React, { Component } from 'react';
import { GET } from "../services/http.services";
import '../components/MensajesTable/MensajesTable.css';

const styles = {
    height: 250,
    width: 250
};

class DetailProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            data: null
        }
    }

    componentDidMount() {
        GET(`products/${this.state.id}`).then((response = []) => this.setState({ data: response }));
    }


    render() {
        return (this.state.data && <div>
            <p>{this.state.data.title}</p>
            <p>{this.state.data.category}</p>
            <p><img style={ styles } src={this.state.data.image} alt=''></img></p>
            <p>{this.state.data.price} €</p>
            <p>{this.state.data.description}</p>
            </div>);
    }
}

export default DetailProduct;