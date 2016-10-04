import React from 'react';
import { Votes } from '../votes/votes.jsx';

class Home extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="hmoe">
        <div className="jumbotron">
          <h2>Votes</h2>
          <Votes></Votes>
        </div>
      </div>
    );
  }

}

export { Home };