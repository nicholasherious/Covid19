import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';
import './TopBar.css'

const TopBar = (props) => {
  if(!props.data) {
    return 'Loading...'
  }
  const { confirmed, recovered, deaths, lastUpdate } = props.data

  return (
    
      <div className="topbar" align="center">
      <Grid divided="vertically">
      <Grid.Row columns={3}>
        <Grid.Column>
          <Statistic color="blue">
            <Statistic.Value>{confirmed.value}</Statistic.Value>
            <Statistic.Label>Infected</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic color="green">
            <Statistic.Value>{recovered.value}</Statistic.Value>
            <Statistic.Label>Recovered</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic color='red'>
            <Statistic.Value>{deaths.value}</Statistic.Value>
            <Statistic.Label>Deaths</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
   
    
  );
}

export default TopBar;
