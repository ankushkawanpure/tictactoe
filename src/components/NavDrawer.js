/**
 * Created by Ankush on 5/14/17.
 */
import React, {Component} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/svg-icons/navigation/menu';

import {Link} from 'react-router';




class NavDrawer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open : true
        }
    }

    toggleDrawer = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    };

    render() {
        return (
            <div>
                <Drawer
                    open={this.state.open} >
                    <div style={{
                        height: '200px',
                        width: '100%',
                        backgroundColor:'gray'
                    }}>
                        Login container
                    </div>
                    <Link to='/' >
                        <MenuItem onTouchTap={this.toggleDrawer} primaryText='play'/>
                    </Link>
                    <Divider/>
                    <Link to="/profile">
                        <MenuItem onTouchTap={this.toggleDrawer} primaryText='profile'/>
                    </Link>
                </Drawer>
                <FloatingActionButton onTouchTap={this.toggleDrawer}>
                    <Menu/>
                </FloatingActionButton>
            </div>
        )

    }
}

export default NavDrawer;