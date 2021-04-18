import React, { Component } from 'react';
import './filtr-list.css';

export default class FiltrList extends Component {

    countCitizens(currentItem, listType) {
        const {citizens} = this.props
        

        return citizens.filter(element => {
            return element[`${listType}`] === currentItem[`${listType}`]
        }).length
    }

    renderItems(arr) {
        if (arr === undefined) {return []}
        if (arr.length > 0) {
            const result = arr.map((item) => {
                return (
                    <li key = {item.idPerson} onClick={(e)=>this.props.onClickFilterItem(e,item,this.props.listType)}>
                        <a className='filtr-link' href='#'>
                            <span>{item[`${this.props.listType}`]}</span>
                            <span>{this.countCitizens(item, this.props.listType)}</span>
                        </a>
                    </li>
                )
            })
            
            return result;
        } else {
            return []
        }
    }

    render() {
        const {itemList} = this.props;
        
        const items = this.renderItems(itemList);

        return(
            <ul className='filtr-ul'>
                {items}
            </ul>
        )
    }
}
