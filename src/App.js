import React, { Component } from 'react'

import Chart from "./component/Chart/Chart";
import Cards from "./component/Cards/Cards";
import CountryPicker from "./component/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import {fetchData} from "./api"


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
    render() {
        const {data} = this.state;
        return (
            
          <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker />
            <Chart />
          </div>
        );
    }
}
