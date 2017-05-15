/**
 * Created by Ankush on 5/14/17.
 */
import {css} from 'styled-components';

export const media= {
    handheld: (...args) => css`
@media(max-width: 800px) {
    ${css(...args)}
}`
};