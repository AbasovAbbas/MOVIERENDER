import React from 'react';
import TableHeader from './table-headers'
import TableBody from './tableBody'

export default function Table(props) {
    const {data, columns, sortColumn, onSort,onDelete } = props;
    return (
        <table className = 'table'>
                <TableHeader columns = {columns} sortColumn = {sortColumn} onSort = {onSort}/>
                <TableBody data = {data} columns = {columns} onDelete = {onDelete}/>
        </table>
    )
}
