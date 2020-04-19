import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData=async(country)=>{
    let changeUrl=url;
    if(country){
        changeUrl=`${url}/countries/${country}`
    }

    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeUrl)
        // const modifieddata={confirmed,recovered,deaths,lastupadte}
        
        
        return { confirmed, recovered, deaths, lastUpdate }; 
    } catch (error) {
        console.log(error) 
    }
}

export const fetchDailyData=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`)
        
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            data:dailyData.reportDate
        }))
        //console.log(data)
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`)
        //console.log(response)

        return countries.map((country)=>country.name)
    } catch (error) {
        
    }
}