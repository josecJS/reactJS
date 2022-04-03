import { memo } from 'react';
import '../components/MensajesTable/MensajesTable.css';
import { Link } from 'react-router-dom';

const styles = {
    height: 250,
    width: 250
};


function ProductItem(props) {
  return (<div key={props.product.id} className="card">
              <img style={ styles } src={props.product.image} alt=''></img>
              <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <Link to={`/product/${props.product.id}`}>Ver</Link>
              </div>
        </div>);
}

export default memo(ProductItem);