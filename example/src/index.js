import React from 'react';
import { render } from 'react-dom';

import ScratchCard from '../../src';
import cardImage from './card.jpg';

const settings = {
  width: 240,
  height: 240,
  image: cardImage,
  finishPercent: 50,
  onComplete: () => console.log('The card is now clear!'),
  onStart: () => console.log('Started'),
  onStop: () => console.log('Stopped'),
  borderRadius: 16,
};

const Example = () =>
  <ScratchCard {...settings}>
    Congratulations! You WON!
  </ScratchCard>;

render(<Example />, document.getElementById('root'));
