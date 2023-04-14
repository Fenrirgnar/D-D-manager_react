import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import EmplotersList from '../employers-list/employers-list';
import EmploersAddForm from '../empoyers-add-form/emploers-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"Зелье лечения", price: 50, increase:false, star: false, id:1},
                {name:"Двуручный топор +3", price: 120, increase:true, star: true, id:2},
                {name:"Лук+1", price: 100, increase:false, star: false, id:3},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, price) => {
        if (name !== '' && price!== '') {
        const newItem = {
            name,
            price,
            increase:false,
            star: false, 
            id: this.maxId++    
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
    }))}


  searchEmp = (items, term) => {
    if(term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
  }
 onUpdateSearch = (term) => {
    this.setState({term})
 }

 filterPost = (items, filter) => {
    switch (filter) {
        case 'magic': 
            return items.filter(item => item.star);
        case 'artefact': 
            return items.filter(item => item.increase);
        default: 
            return items
    }
 }
 onFilterSelect = (filter) => {
    this.setState({filter});
 }

    render() {
        const {data, term, filter} = this.state;
        const products = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo products={products}
                         increased={increased}  />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmplotersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmploersAddForm onAdd={this.addItem} />
                
            </div>
        );
    }
}

export default App;