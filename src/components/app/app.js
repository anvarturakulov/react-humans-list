import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import FiltrPanel from '../filtr-panel';
import HumansList from '../humans-list';

export default class App extends Component {

    render() {

        fetch('cities.json')
            .then(data =>console.log(data))
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
