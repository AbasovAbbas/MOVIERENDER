import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class MovieTable extends Component {
    columns = [
        {path : 'title', label : 'Title', content : movie => <Link to= {`/movies/${movie._id}`}>{movie.title}</Link>},
        {path : 'genre', label : 'Genre'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'rate', label : 'Rate'},
        {key : 'delete', content : movie => (<button onClick = {() => this.props.onDelete(movie)} className = 'btn btn-danger'>Delete</button>)}
    ]
    render(){
        const {movies, onDelete, sortColumn, onSort} = this.props;
    return (
        <Table  data = {movies} onDelete = {onDelete} columns = {this.columns} sortColumn = {sortColumn} onSort = {onSort}/>
        )
    }
}
export default MovieTable;