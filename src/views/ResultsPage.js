import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import config from '@src/api-config.js';
import SearchImages from '@components/SearchImages.js';

function ResultsPage() {
    const [results, setResults] = useState([]);

    const params = useParams();
    const apiUrl = config.apiUrl;
    const apiKey = config.apiKey;
    const url = `${apiUrl}search/photos?query=${params.id}&page=1&per_page=9&client_id=${apiKey}`;

    useEffect(() =>{
        fetch(url)
        .then(response => response.json())
        .then(data => { setResults(data) });
    }, [url])

    function DisplayPhotos(props) {
        const images = props?.photos?.results ? props.photos.results : [];
        let para = (<div></div>);

        if (images?.length === 0) return para;

        if (images[0].id) {
            para = images.map((image) =>
                <div key={image.id} className="img-container">
                    <a href={image.links.html} target="_blank" rel="noreferrer">
                        <img src={image.urls.small} alt={image.id} className="containter-img-item"/>
                    </a>
                    <hr className="white-line"/>
                    <span className="author-info">By {image.user.name}</span>
                </div>
            );
        }

        return (
            <div className="flex wrap images-container">
                <h2 className="results-title">Results for: {params.id}</h2>
                {para}
            </div>
        );
    }

    return (
        <>
            <header className="flex flex-col-center header-content">
                <h1>You are on results page!</h1>
                <SearchImages/>
            </header>
            {<DisplayPhotos photos={results}/>}
        </>
    )
}

export default ResultsPage;