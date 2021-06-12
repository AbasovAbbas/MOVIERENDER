import React, { Component } from 'react'
import { getMovies } from '../services/movieService'; 
import { getGenres} from '../services/genreService'
import {paginate} from './utilities/paginate'
import Pagination from './common/pagination';
import MovieTable from './movieTable';
import ListGroup from './common/filter';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies : getMovies(),
        genres : getGenres(),
        pageSize : 4,
        currentPage : 1,
        sortColumn : {path : 'title', order : 'asc'}
    };
    componentDidMount(){
        const genres = [{value : 'allGenres',_id : 0} , ...getGenres()];
        this.setState({movies : getMovies(), genres})
    }
    deleteItem = (movie) =>{
        const movies = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({movies : movies})
    }
    sortItems = (sortColumn) =>{        
        this.setState({sortColumn})
    }
    handleChange = (page) =>{
        this.setState({currentPage : page})
    }
    handleSelectGenre = genre =>{
        this.setState({selectedGenre : genre, currentPage : 1})
    }
    render() {
        const {movies : allMovies, currentPage, pageSize, selectedGenre, genres } = this.state;

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m._id === selectedGenre._id) : allMovies
        const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order]);

        const movies = paginate(sorted,currentPage,pageSize);
        const count = filtered.length;
        if(count === 0){
            return <h3 style = {{width : '70%', margin : '200px'}}>There are no rows in database</h3>
        }
        return (
            <div className = 'row m-4'>
                <div className = 'col-3'>
                    <ListGroup selectedItem ={selectedGenre} items = {genres} onItemSelect ={this.handleSelectGenre}/>
                </div>
                <div>
                    <h1>There are {count} rows in database</h1>
                    <MovieTable sortColumn = {this.state.sortColumn} movies = {movies} onDelete = {this.deleteItem} onSort = {this.sortItems}/>
                    <Pagination 
                    itemsCount = {count} 
                    pageSize = {pageSize} 
                    currentPage = {currentPage}
                    onChange = {this.handleChange}/>
                </div>
            </div>    
        )
    }
}
export default Movies;