import { createGlobalStyle } from 'styled-components';

import NeueMachina from './NeueMachina-Regular.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Neue Machina';
        src: local('Neue Machina'), local('NeueMachina-Regular'),
        url(${NeueMachina}) format('otf');
        font-weight: 400;
        font-style: normal;
    }
`;