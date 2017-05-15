/**
 * Created by Ankush on 5/14/17.
 */
import React, {Component} from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import {Link} from 'react-router';

import {NavToggleButton} from '../styled/NavDrawer';


class NavDrawer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open : true,
            width : 250
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
                    open={this.state.open}
                    width={this.state.width}
                >
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

                <NavToggleButton
                    toggle={this.toggleDrawer}
                    width={this.state.width}
                    open={this.state.open}
                />


            </div>
        )

    }
}

export default NavDrawer;