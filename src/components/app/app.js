import React from 'react';
import './app.css';

import FiltrPanel from '../filtr-panel';
import HumansList from '../humans-list';

const App = () => {
    return(
        <div className='app'>
            <FiltrPanel/>
            <HumansList/>
        </div>
    )
}

export default App;