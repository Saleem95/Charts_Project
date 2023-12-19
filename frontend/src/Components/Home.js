import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            
                <h1 >Dashboard</h1>
                <div className='links'>
                    <div>
                    <Link to="/">Home</Link>
                    </div>
                    <div>
                    <Link to="/table">Table</Link>
                    </div>
                    <div>
                    <Link to="/contact">Contact</Link>
                    </div>
                </div>
            
        </div>
    );
}

export default Home;