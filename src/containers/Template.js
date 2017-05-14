/**
 * Created by Ankush on 5/13/17.
 */
import React, {Component} from 'react';

class Template extends Component {


    render() {
        return (
            <div>
                <header>
                    <h1>
                    TIc Tac Toe
                    </h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }


}


export default Template;