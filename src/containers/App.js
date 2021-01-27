import React, { useState, useEffect } from 'react';

//imported Components
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

//Styles
import './app.css';

function App() {

    const [robots, setRobots] = useState( [] );
    const [searchfield, setSearchfield] = useState('');

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter( robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    
    return !robots.length ?
    <h1 className='tc'>Loading</h1>
    :(
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={ onSearchChange }/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={ filteredRobots }/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
    
};
export default App;