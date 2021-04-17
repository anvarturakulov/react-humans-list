import React, {Component} from 'react';

import './citizens-list.css';
import CitizensListItem from '../citizens-list-item';

export default class CitizensList extends Component {
    state = {
        itemlist : this.props.itemlist
    }

    renderItems(arr) {
        if (arr.length > 0) {
            console.log('arr bush emas');
            console.log(arr);
            const result = arr.map((item) => {
                return (
                    <li key = {item.keyitems}>
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
        console.log('render ichidagi propsdan olingan itemlist');
        console.log(itemlist);

        const items = this.renderItems(itemlist);
        console.log('items redner itemsdan olingan ruyhat');
        console.log(items);
        console.log('****************************************');
        
        return(
            <ul className='app-list'>
                {items}
            </ul>
        )    
    }
    
    
}

