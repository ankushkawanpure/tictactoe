/**
 * Created by Ankush on 5/13/17.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class Template extends Component {



    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton onTouchTap={() => {alert("YOu clicked")}} label="Primary" primary={true}  />
                    <header>
                        <h1>
                            TIc Tac Toe
                        </h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }


}


export default Template;