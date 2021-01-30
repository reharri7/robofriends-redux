import React from 'react';
import { connect } from 'react-redux';
//imported Components
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import{ setSearchField, requestRobots } from '../actions';

//Styles
import './app.css';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter( robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
    
    
        return isPending ?
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
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);