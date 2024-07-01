import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter, Routes, and Route
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';  // You need to create this component
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Countries />} />  {/* Use 'element' prop instead of 'component' */}
                <Route path="/country/:name" element={<CountryDetail />} />  {/* Use 'element' prop instead of 'component' */}
            </Routes>
        </Router>
    );
}

export default App;
