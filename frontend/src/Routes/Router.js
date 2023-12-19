import React from 'react';
import { Routes, Route} from 'react-router-dom'
// import Home from '../Components/Home';
import Dashboard from '../Components/Dashboard';
import Table from '../Components/Table';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
function Router(props) {
    return (
        <div>
            <NavBar />
            <div className='dashboard'>
            <div className='sidebar'>
            <Home />
            </div>

            <div className='main-content'>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/table" element={<Table />}/>
                <Route path="/contact" element={<Contact />}/>

            </Routes>            
            </div>
            
        </div>            

        </div>
    );
}

export default Router;