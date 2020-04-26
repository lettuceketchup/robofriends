import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className='pa3 ba b--blue bg-washed-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox