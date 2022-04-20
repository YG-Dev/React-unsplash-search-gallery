import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchImages() {
    let navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const searchMinLength = 3; //minimum number of letter in query

    const handleKeyUp = (event) => {
        if(event.key === 'Enter' && searchValue.length >= searchMinLength) navigate(`/results/${searchValue}`)
      }

    return (
        <div className="flex">
            <input className="search-input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyUp={handleKeyUp}/>
            <Link role="button" to={`/results/${searchValue}`} className={`btn btn-link ${searchValue.length >= searchMinLength ? '' : 'btn-disabled'}`}>Search</Link>
        </div>
    )
}

export default SearchImages;