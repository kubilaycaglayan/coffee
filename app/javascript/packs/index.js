import React from 'react';
import ReactDOM from 'react-dom';
import Provided from './src/containers/Provided';
import './src/styles/main.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './src/styles/loading.css';
import './src/styles/menu.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provided />,
    document.getElementById('root'),
  );
});
