import React from 'react'
import {Card,CardContent,Typography,Grid} from "@material-ui/core"
import styles from "./Cards.module.css";
import CountUp from 'react-countup';
//import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate}})=>{
    console.log(confirmed)
      if(!confirmed){
          return 'Loading......'
      }
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">

          <Grid item component={Card} xs={12} md={3} className="infected">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Infected</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={3.5} separator=","/>
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of active cases COVID19
              </Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className="recovered">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Recoverd
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={recovered.value} duration={3.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of recoveries cases COVID19
              </Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className="deaths">

            <CardContent>
              <Typography color="textSecondary" gutterBottom>Death
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={deaths.value} duration={3.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of death cases COVID19
              </Typography>
            </CardContent>
          </Grid>

        </Grid>
      </div>
    );
}
export default Cards;