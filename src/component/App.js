import React from 'react';
import About from './views/About';
import Home from './views/Home';
import Projects from './views/Project';

class App extends React.Component {
    render() {
        return(
            <div className="Nav">
                <Home />
                <Projects />
                <About />
            </div>
        );
    }
}

export default App; 