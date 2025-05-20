
import React from 'react';
import ReactDOM from 'react-dom/client';
import Hobbit from './pages/hobbit/Hobbit';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// const hobitElement = <h1>I'm a hobit.</h1>

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="hobbits" element={<Hobbit about="amazing"/>} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

