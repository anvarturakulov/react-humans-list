import React, {Component} from 'react';

import './citizens-list.css';
import CitizensListItem from '../citizens-list-item';

export default class CitizensList extends Component {

    renderItems(arr) {
        if (arr.length > 0) {
            const result = arr.map((item) => {
                return (
                    <li key = {item.idPerson}>
                        <CitizensListItem {...item}/>
                    </li>
                )
            })
            return result;
        } else {
            return []
        }
    }
    
    render() {
        const {itemlist} = this.props;
        const items = this.renderItems(itemlist);

        return(
            <ul className='app-list'>
                {items}
            </ul>
        )    
    }
    
}

