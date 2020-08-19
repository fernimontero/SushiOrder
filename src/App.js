import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Sushiappbar from './Sushiappbar';
import Cards from './Cards';


function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <Sushiappbar/>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8}>
            <Cards/>
          </Grid>
          <Grid item xs={false} sm={2}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
