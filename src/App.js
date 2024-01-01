import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Pathfinder from './pathfinderComponents/pathfinder';
import Home from './homeComponents/home';
import Seive from './primeComponents/seive';
import Sort from './sortComponents/sort';
import Queen from './queenComponents/queen';
import About from './homeComponents/about';
import BinarySearch from './binarySearchComponent/binarySearch';
import RecursiveSort from './recursiveSortComponents/recursiveSort';
import Graph from './Graph/graph';

const App = () => {
    useEffect(() => {
        // console.log(window.innerHeight, " ", window.innerWidth);
    }, []);

    return (
        <Router basename='/'>
            <Switch>
            {/* Inside the Switch component, multiple Route components are defined for different paths. Each Route specifies a path and the corresponding component to be rendered when that path is matched. */}
                <Route path='/pathfinder' component={Pathfinder} />
                <Route path='/prime' component={Seive} />
                <Route path='/sort' component={Sort} />
                <Route path='/nqueen' component={Queen} />
                <Route path='/binarysearch' component={BinarySearch} />
                <Route path='/recursivesort' component={RecursiveSort} />
                <Route path='/graph' component={Graph} />
                <Route path='/about' component={About} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
