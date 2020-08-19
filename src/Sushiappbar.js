import React from 'react';
import {
    AppBar,
    Toolbar, 
    Typography, 
    IconButton,
    Drawer,
    Badge,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    Avatar,
    ListItemText} from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import MenuIcon from '@material-ui/icons/Menu';
import Cards from './Cards';
import SettingsIcon from '@material-ui/icons/Settings';
import ArchiveIcon from '@material-ui/icons/Archive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default class Sushiappbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            totalOrder: this.props.totalOrder,
        }
    }

    open(){
        if(this.state.open == false){
            this.setState({open:true});
        }
    }

    render(){
        const { totalOrder, open } = this.state;
        const closeDrawer = ()=>{
             this.setState({open:false});
        }
        return(
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <IconButton onClick={(event)=> this.open()}edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" style={{flexGrow:1}}>
                            Sushi Order
                        </Typography>
                        <IconButton edge="end" >
                            <Badge badgeContent="10" color="secondary">
                                <ShopIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={open} onClose={()=>closeDrawer()}>
                    <div style={{width:'250px', height:'100%'}}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Sushi Order"/>
                            </ListItem>
                            <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Account"/>
                            </ListItem>
                             <ListItem button>
                                <ListItemIcon>
                                    <ArchiveIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Order History"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Settings"/>
                            </ListItem>
                                <ListItem button style={{position:'fixed', bottom:'30px', width:'250px'}}>
                                    <ListItemIcon>
                                        <ExitToAppIcon/>
                                    </ListItemIcon>
                                <ListItemText primary="Log Out"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}