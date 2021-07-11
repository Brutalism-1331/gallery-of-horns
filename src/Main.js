import React from 'react';
import HornedBeast from './HornedBeast.js';



class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title="TESTTEST"
          alt= {'Hannya Mask One'}
          image= {require('./images')} />
        />
      </>
    )
  }
}

export default Main;
