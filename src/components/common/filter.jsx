import React from 'react'

function ListGroup(props) {
    const {items, selectedItem, onItemSelect} = props;
    return (
        <div>
            <ul className="list-group">
                {items.map(item => 
                    <a  onClick = {() => onItemSelect(item)} key = {item._id} className = {selectedItem === item ? 'list-group-item active' : 'list-group-item'}>{item.value}</a>
                )}
            </ul>
        </div>
    )
}
export default ListGroup;



