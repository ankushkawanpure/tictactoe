/**
 * Created by Ankush on 5/14/17.
 */
import React from 'react';
import styled from 'styled-components';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StyleVisible = styled.div`
position: absolute;
margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
transition: margin .2s;
`;

export const NavToggleButton = (props) => {

    return(
        <StyleVisible {...props}>
            <FloatingActionButton onTouchTap={props.toggle}>
                <Menu/>
            </FloatingActionButton>
        </StyleVisible>
    )
};


