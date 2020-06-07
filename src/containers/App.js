import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import  './App.css';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}));

}

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }
        )
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;