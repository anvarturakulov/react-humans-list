import React from 'react';
import './filtr-panel.css';
import FiltrList from '../filtr-list'


const FiltrPanel = ({currentCityList, currentDistrictList, currentStreetList, citizens,onClickFilterItem,allCitizens}) => {

    return (
        <div className='filtr-panel'>
            <div className='filtr-panel-header'>
                <span className='caption'>Город</span>
                <button onClick = {() => allCitizens()}>Все</button>
            </div>
            
            <FiltrList 
                itemList={currentCityList}
                listType={'city'}
                citizens = {citizens}
                onClickFilterItem = {onClickFilterItem}
            />
            
            <span className='caption'>Район</span>
            <FiltrList 
                itemList={currentDistrictList} 
                listType={'district'}
                citizens = {citizens}
                onClickFilterItem = {onClickFilterItem}
            />
            
            <span className='caption'>Улица</span>
            <FiltrList 
                itemList={currentStreetList}
                listType={'street'}
                citizens = {citizens}
                onClickFilterItem = {onClickFilterItem}
            />
        </div>
    )
}


export default FiltrPanel;