import React from 'react';
import './citizens-list-item.css';

const CitizensListItem =({country, cityId, name, city, district, street}) => {
    return (
        <div className='list-item'>
            <div className='caption-box'>
                <div className='citizen-name'>{name}</div>
                <button>Изменить данные</button>
            </div>
            <div className='information-block'>
                <div className='inf-block'>живет в <span>{country}</span></div>
                <div className='inf-block'><span>{city}</span></div>
                <div className='inf-block'>в <span>{district}</span></div>
                <div className='inf-block'>на <span>{street}</span></div>
            </div>
        </div>
    )
}

export default CitizensListItem;