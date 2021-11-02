import { createGlobalStyle } from 'styled-components';
import PlayfairDisplayWoff from './PlayfairDisplay.woff';
import PlayfairDisplayWoff2 from './PlayfairDisplay.woff2';
import OxygenBoldWoff from './OxygenBold.woff';
import OxygenBoldWoff2 from './OxygenBold.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Playfair Display';
        src: url(${PlayfairDisplayWoff2}) format('woff2'),
            url(${PlayfairDisplayWoff}) format('woff');
        
    },
    @font-face {
        font-family: 'Oxygen';
        src: url(${OxygenBoldWoff2}) format('woff2'),
        url(${OxygenBoldWoff}) format('woff');
    }
`;

export default FontStyles;