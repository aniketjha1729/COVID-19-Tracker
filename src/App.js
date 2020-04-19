import React, { Component } from 'react'

import Chart from "./component/Chart/Chart";
import Cards from "./component/Cards/Cards";
import CountryPicker from "./component/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import {fetchData} from "./api"

import cornoraImg from "./images/COVID19.png";

export default class App extends Component {
    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        // console.log(data)
        this.setState({data:fetchedData})
    }

    handleCountryChange=async(country)=>{
      const fetchedData = await fetchData(country);
      //console.log(fetchedData)
      //console.log(country)
      this.setState({ data: fetchedData,country:country })

    }
    render() {
        const {data,country} = this.state;
        return (
            
          <div className={styles.container}>
          <img className={styles.img} src={cornoraImg} alt="COVID19"/>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
          </div>
        );
    }
}
