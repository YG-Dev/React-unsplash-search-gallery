import { React } from 'react';
import SearchImages from '@components/SearchImages.js';

function HomePage() {
    return (
        <header className="flex flex-col-center header-content">
            <h1>Welcome to Splash Search Gallery!</h1>
            <h2>Please type your query in the input below</h2>
            <SearchImages/>
        </header>
    )
}

export default HomePage;