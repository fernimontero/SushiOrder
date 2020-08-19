import React from 'react';
import {Card, CardContent, Typography, CardHeader, CardMedia, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Sushiappbar from './Sushiappbar';

export default class CardContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tot:0,
            price: this.props.price,
            totalOrder:0
        };
    }


    addOne(){
        console.log("add clicked");
        this.setState({
            tot : this.state.tot + 1,
            totalOrder: this.state.totalOrder +1,
        });
    }

    remove(){
        console.log("Remove Clicked");
        if(this.state.tot == 0 )
            this.setState({ 
                tot: 0,
            });
        else{
            this.setState({
                tot: this.state.tot -1,
                totalOrder: this.state.totalOrder - 1,
            })
        }
    }

    render(){
        const { tot }  = this.state;
        const { imageUrl } = this.props;

        
        return(
             <Card style={{marginTop:'13px'}}>
                <CardHeader title={this.props.title} subheader={this.props.subtitle}/>
                <CardMedia 
                    style={{height:'150px'}}
                    image={imageUrl} //require('./nigiri.jpg')
                />
                <CardContent>
                   <div style={{padding:'5px 2px',justifyContent:'center', display:'flex'}}> 

                       <IconButton onClick={(event) => this.remove()}>
                            <RemoveIcon/>
                        </IconButton>
                        <Typography variant="h5">{tot}</Typography>
                        <IconButton onClick={(event) => this.addOne()} >
                            <AddIcon />
                        </IconButton>
                    </div>

                    <Typography>{this.props.price} $</Typography>
                </CardContent>
            </Card>
        );
    }


}