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
                <div className='citizen-country'>{`в ${country}`}</div>
                <div className='citizen-city'>город {city} </div>
                <div className='citizen-district'>{` в ${district}`}</div>
                <div className='citizen-street'>{` на улице ${street}`}</div>
            </div>
        </div>
    )
}

export default CitizensListItem;