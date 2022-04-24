import './App.css'
import './header.css'
import  './main.css'
import {Home} from "./Home";

const App = () => {
    return (
        <>
            <header className='header'>
                <div className='header-container'>
                    <h1 className='logo'>GentleMan</h1>
                </div>
            </header>
            <main className='main'>
                <div className='main-container'>
                    <Home />
                </div>
            </main>
            <footer>
                <p>© 2022 jp-knj</p>
            </footer>
        </>
    )
}

export default App
