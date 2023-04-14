import { Component } from 'react';

import './employers-add-form.css';

class EmploersAddForm extends Component {
   constructor(props) {
    super(props);
    this.state = {
        name: '',
        price: ''
    }
   }
   onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.price);
        this.setState({
            name: '',
            price: ''
        }) 
   }
   valueChange = (e) => {
    this.setState( {
        [e.target.name] : e.target.value
    })
   }
   
    render() {
        const {name, price} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте товар</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Название"
                        name='name'
                        value={name}
                        onChange={this.valueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Цена в зм"
                        name='price'
                        value={price}
                        onChange={this.valueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light btn-gold">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmploersAddForm;