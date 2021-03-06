import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css'
import './header.css'
import  './main.css'
import {Home} from "./Home";
import {BackgroundColor} from "./pages/BackgroundColor";

const App = () => {
    return (
        <AnimatePresence>
            <BrowserRouter>
                <header className='header'>
                    <div className='header-container'>
                        <h1 className='logo'>GentleMan</h1>
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/backgroundcolor' element={<BackgroundColor />} />
                </Routes>
                <footer>
                    <p>© 2022 jp-knj</p>
                </footer>
            </BrowserRouter>
        </AnimatePresence>
    )
}

export default App
