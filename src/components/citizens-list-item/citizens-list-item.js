import React from 'react';
import './citizens-list-item.css';

const CitizensListItem =({country, nameA, district, street}) => {
    return (
        <div className='list-item'>
            <div className='caption-box'>
                <div className='citizen-name'>{nameA}</div>
                <button>Изменить данные</button>
            </div>
            <div className='information-block'>
                <div className='citizen-country'>{`в ${country}`}</div>
                <div className='citizen-city'>город</div>
                <div className='citizen-district'>{`в ${district}`}</div>
                <div className='citizen-street'>{`на улице ${street}`}</div>
            </div>

            
        </div>
    )
}

export default CitizensListItem;