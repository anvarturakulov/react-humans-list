import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import FiltrPanel from '../filtr-panel';
import CitizensList from '../citizens-list';
import GetData from '../../services/getData';

export default class App extends Component {
    
    getData = new GetData();
    state = {
        cities : [],
        citizens : []
        // citizens : [{keyitems: 0, country: "ddddd", nameA: "Анна", cityId: 0, district: "ssss",},
        //            {keyitems: 1, country: "ddddd", nameA: "Степан", cityId: 1, district: "ssss", },
        //            {keyitems: 2, country: "ddddd", nameA: "Виктор", cityId: 1, district: "ssss",},
        //            {keyitems: 3, country: "ddddd", nameA: "Алексей", cityId: 1, district: "ssss", },
        //            {keyitems: 4, country: "ddddd", nameA: "Ярослав", cityId: 1, district: "ssss", },
        //            {keyitems: 5, country: "ddddd", nameA: "Антонина", cityId: 1, district: "ssss", },
        //            {keyitems: 6, country: "ddddd", nameA: "Григорий", cityId: 2, district: "ssss", },
        //             {keyitems: 7, country: "ddddd", nameA: "Александр", cityId: 2, district: "ssss", },
        //             {keyitems: 8, country: "ddddd", nameA: "Владимир", cityId: 2, district: "ssss", },
        //             {keyitems: 9, country: "ddddd", nameA: "Василий", cityId: 2, district: "ssss", },
        //             {keyitems: 10, country: "ddddd", nameA: "Яков", cityId: 3, district: "ssss",},
        //             {keyitems: 11, country: "ddddd", nameA: "Виктория", cityId: 3, district: "ssss",},
        //             {keyitems: 12, country: "ddddd", nameA: "Николай", cityId: 3, district: "ssss", },
        //             {keyitems: 13, country: "ddddd", nameA: "Валентин", cityId: 3, district: "ssss",}
        //  ]
    }

    async loadStartData() {
        // const cities = this.getData.getCities();
        const citizens = this.getData.getResource('data/citizens.json');
        console.log('loaddagi citizens ');
        console.log(citizens);

        let newArr = [];
        let newArr2 = []
        const newRes = await citizens.then(data => {
            data.citizens.forEach((element, key) => {
                const newObj = {'keyitems': key, 'country':'ddddd', 'nameA' : element.name,'cityId':element.id, 'district' : 'ssss',};
                //getProperty(element,'district'),'street' : 'zzz'//getProperty(element,'street')
                newArr.push(newObj)
            })

            // newArr = JSON.parse(JSON.stringify(data));
            // newArr.citizens.forEach((element, key) => {
            //         const newObj = [{'keyitems': key, 'country':'ddddd', 'nameA' : element.name,'cityId':element.id, 'district' : 'ssss'}];
            //         //getProperty(element,'district'),'street' : 'zzz'//getProperty(element,'street')
            //         newArr2 = [...newArr2, ...newObj]
            //         // console.log(newArr2)
            //     })
            //     console.log(newArr2)
            // // return newArr2
        })
        console.log('newArr --- ***** ');
        console.log(newArr);
        
        
        // this.setState({cities});
        this.setState({citizens : newArr});
    }

    componentDidMount() {
        this.loadStartData();
    }

    render() {
        
        const visibleCitizensList = this.state.citizens;
        console.log('boshlangich visible list');
        console.log(visibleCitizensList)
        return(
            <div className='app'>
                <Header/>
                <div className='app-bottom'>
                    <FiltrPanel/>
                    <CitizensList 
                        itemlist = {visibleCitizensList}    
                    />
                </div>
            </div>
        )
    }
    
}
