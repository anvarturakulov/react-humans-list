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
        const {filterCity, filterDistrict, filterStreet} =this.props;
        const items = this.renderItems(itemlist);
        const cityBox = (filterCity !== '') ? <button onClick = {()=> this.props.btnDelete('city')}>{filterCity}</button> : <></>;
        const districtBox = (filterDistrict !== '') ? <button onClick = {()=> this.props.btnDelete('district')}>{filterDistrict}</button> : <></>;
        const streetBox = (filterStreet !== '') ? <button onClick = {()=> this.props.btnDelete('street')}>{filterStreet}</button> : <></>;
        const comment = (filterCity+filterDistrict+filterStreet) !='' ? <div className='comment'>Чтобы убрать или изменить филтр нажмите кнопки</div>: null;

        return(
            <div>
                <div className='filtr-info-box'>
                    {cityBox} 
                    {districtBox}
                    {streetBox}
                    {comment}
                </div>
                <ul className='app-list'>
                    {items}
                </ul>
            </div>
            
        )    
    }
    
}

