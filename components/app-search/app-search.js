import { Component } from 'react';
import './app-search.css';


class SearchPanel extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    
    render() {
        return (
            <input
            type="text"
            className="form-control search-imput"
            placeholder="Найти товар"
            value={this.state.term}
            onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;