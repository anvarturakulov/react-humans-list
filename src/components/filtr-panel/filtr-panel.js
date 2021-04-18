import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './filtr-panel.css';
import FiltrList from '../filtr-list'


export default class FiltrPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentCityList, currentDistrictList, currentStreetList, citizens} = this.props;

        return (
            <div className='filtr-panel'>
                <div className='filtr-panel-header'>
                    <span className='caption'>Город</span>
                    <button onClick = {() => this.props.allCitizens()}>Все</button>
                </div>
                
                <FiltrList 
                    itemList={currentCityList}
                    listType={'city'}
                    citizens = {citizens}
                    onClickFilterItem = {this.props.onClickFilterItem}
                />
                
                <span className='caption'>Район</span>
                <FiltrList 
                    itemList={currentDistrictList} 
                    listType={'district'}
                    citizens = {citizens}
                    onClickFilterItem = {this.props.onClickFilterItem}
                />
                
                <span className='caption'>Улица</span>
                <FiltrList 
                    itemList={currentStreetList}
                    listType={'street'}
                    citizens = {citizens}
                    onClickFilterItem = {this.props.onClickFilterItem}
                />
            </div>
        )
    }
}
