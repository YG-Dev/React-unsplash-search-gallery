import '@assets/css/App.css';
import { React } from 'react';
import HomePage from '@views/HomePage.js';
import ResultsPage from '@views/ResultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <main className="main-container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/results" element={<ResultsPage/>}>
            <Route path=":id" element={<ResultsPage/>}/>
          </Route>
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;