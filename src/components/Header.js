import React, { Component } from 'react';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return <h1 className='f1'>Robofriends</h1>
    }
}

export default Header
