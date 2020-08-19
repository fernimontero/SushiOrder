import React from 'react';
import {Grid} from '@material-ui/core';
import CardContainer from './CardContainer';

const style = {
    root:{
        marginTop:'10px',
    }
}


export default class Cards extends React.Component{


    render(){
        return(
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="2.20"
                        title="Nigiri"
                        subtitle="fish"
                        imageUrl={require('./nigiri.jpg')}/> 
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="2.00" 
                        title="Uramaki"  
                        subtitle="other good fish roll"
                        imageUrl={require('./nigiri.jpg')}/>
                </Grid>                
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="3.40" 
                        title="Temaki" 
                        subtitle="very good roll fish"
                        imageUrl={require('./nigiri.jpg')}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="1.20" 
                        title="Hosomaki" 
                        subtitle="more fish"
                        imageUrl={require('./nigiri.jpg')}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="1.80" 
                        title="Gunkan"  
                        subtitle="fish and BHO"
                        imageUrl={require('./nigiri.jpg')}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContainer 
                        price="1.50" 
                        title="Sashimi" 
                        subtitle="just Fish"
                        imageUrl={require('./nigiri.jpg')}/>
                </Grid>
            </Grid>
        );
    }
}