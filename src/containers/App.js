import React from 'react';

//imported Components
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

//Styles
import './app.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ?
        <h1 className='tc'>Loading</h1>
        :(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
export default App;