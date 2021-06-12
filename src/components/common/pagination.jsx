import React from 'react';
import _ from 'lodash';

const Pagination =(props) => {
    const {itemsCount, pageSize, onChange, currentPage} = props;
    const pagesCount =Math.ceil(itemsCount / pageSize) ;
    const pages = _.range(1, pagesCount + 1);

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pages.map(p => 
                    <li key = {p} className={p === currentPage ? 'page-item active' : 'page-item'}><a  className="page-link" onClick = {() => onChange(p)}>{p}</a></li>)}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;