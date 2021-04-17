export default class GetData {
    async getResource(url) {
        const res =  await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }

        return await res.json();
     }
        
    async loadJsonAndConvert(url) {
        // const getProperty = (item,property) => {
        //     const propertyValue = item.groups.filter(item => item.type === property).name;
        //     return propertyValue;
        // }
        
        const res = this.getResource(url);
        
        let newArr = [];
        let newArr2 = []
        const newRes = await res.then(data => {
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
        
        return newArr;
    }     

    getCities() {
        return this.loadJsonAndConvert('data/cities.json');
    }

    getCitizens() {
        return this.loadJsonAndConvert('data/citizens.json')
    }
}