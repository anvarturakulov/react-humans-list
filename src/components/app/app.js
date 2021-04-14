import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import FiltrPanel from '../filtr-panel';
import HumansList from '../humans-list';

export default class App extends Component {

    render() {

        // fetch('my-json-server.typicode.com/anvarturakulov/react-humans-list/blob/main/src/data/citizens.json')
            fetch('citizens.json')
                .then(data =>data.json())
                .then(res => console.log(res))
            

        return(
            <div className='app'>
                <Header/>
                <div className='app-bottom'>
                    <FiltrPanel/>
                    <HumansList/>
                </div>
                
            </div>
        )
    }
    
}
