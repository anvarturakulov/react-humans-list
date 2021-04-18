import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import FiltrPanel from '../filtr-panel';
import CitizensList from '../citizens-list';
import GetData from '../../services/getData';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
                cities : [],
                citizens : [],
                visibleCitizens : [], 
                currentCityList : [],
                currentDistrictList : [],
                currentStreetList : [],
                filtrStart : false
            }
        this.getData = new GetData();
        this.loadStartData = this.loadStartData.bind(this);
        this.selectionList = this.selectionList.bind(this);
        this.onClickFilterItem = this.onClickFilterItem.bind(this);
        this.allCitizens = this.allCitizens.bind(this);
    }

    async loadStartData() {

        const citizens = this.getData.getResource('data/citizens.json');
        const getProperty = (item,property) => {
            const propertyValue = item.groups.filter(item => item.type === property);
            if (propertyValue.length = 1) {
                return propertyValue[0].name; 
            } else {
                return '...'
            }
        }

        let newArr = [];
        await citizens.then(data => {
            data.citizens.forEach((element, key) => {
                const newObj = {
                    'idPerson': key, 
                    'country':'России', 
                    'name' : element.name,
                    'cityId':element.id, 
                    'city' : getProperty(element,'city'),
                    'district' : getProperty(element,'district'),
                    'street' : getProperty(element,'street'),
                };
                newArr.push(newObj)
            })
        })
        this.setState({citizens : newArr});
        this.setState({visibleCitizens : newArr});
        
        const cities = this.getData.getResource('data/cities.json');

        newArr = [];
        await cities.then(data => {
            data.cities.forEach((element, key) => {
                const newObj = {
                    'keyitems': key, 
                    'name' : element.name,
                    'cityId':element.id, 
                    'data' : element.data
                };
                newArr.push(newObj)
            })
        })
        this.setState({cities : newArr});
    }

    componentDidMount() {
        this.loadStartData();
    }

    selectionList(list, selectionType) {
        let newArr = [];
        if (list !== undefined) {
            list.forEach(element => {
                let addItem = true;
                const listElement = element[`${selectionType}`];
                newArr.forEach(newElement => {
                    if (newElement[`${selectionType}`] === listElement) {
                        addItem = false;
                    }
                })
                if (addItem) {
                    newArr.push(element)
                }
            });
        }
        return newArr;
    }

    onClickFilterItem (e,currentItem, listType) {
        
        if (this.state.filtrStart == false) {
            this.setState({filtrStart : true})
        }
        
        const {citizens} = this.state;
        const visibleCitizens = citizens.filter(element => {
            return element[`${listType}`] === currentItem[`${listType}`]
        })

        this.setState({visibleCitizens})

        let currentCityList, currentDistrictList, currentStreetList;
        
        if (listType = 'city') {
            currentCityList = visibleCitizens;
            currentDistrictList = this.selectionList(visibleCitizens, 'district');
            currentStreetList = this.selectionList(currentDistrictList, 'street');
            this.setState({currentDistrictList});
            this.setState({currentStreetList});
        }

        if (listType = 'district') {
            currentDistrictList = visibleCitizens;
            currentStreetList = this.selectionList(currentDistrictList, 'street');
            this.setState({currentStreetList});
        }
    }

    allCitizens() {
        const {citizens} = this.state;
        this.setState({visibleCitizens : citizens})
        const currentDistrictList = this.selectionList(citizens, 'district');
        const currentStreetList = this.selectionList(citizens, 'street');
        this.setState({currentDistrictList});
        this.setState({currentStreetList});
    }

    render() {
        
        const {cities, citizens, visibleCitizens,filtrStart} = this.state;
        let currentCityList, currentDistrictList, currentStreetList; 

        currentCityList = this.selectionList(citizens, 'city');
        
        if (filtrStart) {
            currentDistrictList = this.state.currentDistrictList;;
            currentStreetList = this.state.currentStreetList;
        } else {
            currentDistrictList = this.selectionList(citizens, 'district');
            currentStreetList = this.selectionList(citizens, 'street');
        }
        

        return(
            <div className='app'>
                <Header />
                <div className='app-bottom'>
                    <FiltrPanel
                        currentCityList = {currentCityList}
                        currentDistrictList = {currentDistrictList}
                        currentStreetList = {currentStreetList}
                        citizens = {citizens}
                        onClickFilterItem = {this.onClickFilterItem}
                        allCitizens = {this.allCitizens}
                    />
                    <CitizensList 
                        itemlist = {visibleCitizens}    
                    />
                </div>
            </div>
        )
    }
    
}
