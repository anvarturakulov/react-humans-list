import React from 'react';

import './header.css';

const Header = ({col}) => {
    return (
        <div>
            <h1>Всего {col} граждан</h1>
        </div>
    )
}

export default Header;