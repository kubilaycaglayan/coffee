/* eslint-disable max-len */
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import Provided from './src/containers/Provided';
import './src/styles/main.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './src/styles/loading.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provided />,
    document.getElementById('root'),
  );
});
