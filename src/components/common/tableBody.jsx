import React, { Component } from 'react'

class TableBody extends Component {
    cellRender = (item,column) => {
        if(column.content) return column.content(item);
        return item[column.path];                                       
    }
    render(){
        const {data, columns} = this.props;
        return (
            <tbody>
                {data.map(item => 
                    <tr key ={item.id}>
                        {columns.map(column => <td key = {column.path || column.content}>{this.cellRender(item,column)}</td>)}
                    </tr>
                )}
            </tbody>
    )
    }
    
}
export default TableBody;