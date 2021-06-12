const genres = [
    {_id : 111, value : 'comedy'},
    {_id : 222, value : 'action'},
    {_id : 333, value : 'thriller'}
];

export function getGenres(){
    return genres.filter(g => g);
}