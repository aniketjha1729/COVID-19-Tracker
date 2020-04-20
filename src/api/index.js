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

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};

export const fetchCountries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`)
        //console.log(response)

        return countries.map((country)=>country.name)
    } catch (error) {
        
    }
}