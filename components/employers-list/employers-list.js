import EmplotersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';



const EmplotersList = ({data, onDelete, onToggleProp}) => {

    const elemenst = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmplotersListItem
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elemenst}
        </ul>
        
    )
}

export default EmplotersList;