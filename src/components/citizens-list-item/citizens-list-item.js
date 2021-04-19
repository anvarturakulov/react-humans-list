import React, {Component} from 'react';
import './citizens-list-item.css';

export default class CitizensListItem extends Component {
    constructor(props) {
        super(props);
        this.dataInf = this.dataInf.bind(this);
    }

    dataInf(data) {
        return (data.length > 0) ? <span className='city-box'>(население города {data[0]['data']})</span> : null;
    }
    
    render() {
        
        const {country, cityId, name, city, district, street, cities} = this.props
        const data = cities.filter(item => item.cityId === cityId);
        const dataCount = this.dataInf(data);
        return (
            <div className='list-item'>
                <div className='caption-box'>
                    <div className='citizen-name'>{name}</div>
                    {/* <button>Изменить данные</button> */}
                </div>
                <div className='information-block'>
                    <div className='inf-block'>живет в <span>{country}</span></div>
                    <div className='inf-block'><span >{city} </span>{dataCount}</div>
                    <div className='inf-block'>в <span>{district}</span></div>
                    <div className='inf-block'>на <span>{street}</span></div>
                </div>
            </div>
        )
    }
    
}
