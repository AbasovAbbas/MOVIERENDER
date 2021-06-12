const movies = [
    {
        id : 0,
        title : 'Terminator',
        genre : 'action',
        _id :222,
        numberInStock : 6,
        rate : 2.7
    },
    {
        id : 1,
        title : 'Fast & Furious',
        genre : 'thriller',
        _id : 333,
        numberInStock : 5,
        rate : 2.7
    },
    {
        id : 2,
        title : 'One Day',
        genre : 'comedy',
        _id :111,
        numberInStock : 3,
        rate : 2.7
    },
    {
        id : 3,
        title : 'Mistakes',
        genre : 'comedy',
        _id :111,
        numberInStock : 8,
        rate : 2.7
    },
    {
        id : 4,
        title : 'Mistakes',
        genre : 'thriller',
        _id :333,
        numberInStock : 8,
        rate : 2.7
    },
    {
        id : 5,
        title : 'Mistakes',
        genre : 'thriller',
        _id : 333,
        numberInStock : 8,
        rate : 2.7
    },
    {
        id : 6,
        title : 'Mistakes',
        genre : 'action',
        _id : 222,
        numberInStock : 8,
        rate : 2.7
    },{
        id : 7,
        title : 'Mistakes',
        genre : 'comedy',
        _id : 111,
        numberInStock : 8,
        rate : 2.7
    },
    {
        id : 8,
        title : 'Mistakes',
        genre : 'comedy',
        _id : 111,
        numberInStock : 8,
        rate : 2.7
    }
]

export function getMovies(){
    return movies;
}
export function getmovie(id){
    return movies.find(m => m.id === id);
}