import React from 'react';
import { Vote } from '../vote/vote.jsx';

class Votes extends React.Component {

  constructor() {
    super();
    this.state = {
      votes : [{
        id: 1,
        user : {
          id : 1,
          first_name : "Olivier",
          last_name : "Dupre"
        },
        mood : "happy",
        date : 1475595513
      },{
        id: 2,
        user : {
          id : 2,
          first_name : "Brendan",
          last_name : "Gouin"
        },
        mood : "sad",
        date : 1475595513
      },{
        id: 3,
        user : {
          id : 3,
          first_name : "Mathilde",
          last_name : "Quetineau"
        },
        mood : "neutral",
        date : 1475595513
      }],
      intlData : {
        "locales": "fr-FR"
      }
    };
  }
  
  render() {
    const { votes, intlData } = this.state;
    const VoteComponents = votes.map((vote) => {
      return <Vote key={vote.id} {...vote}></Vote>
    });
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>mood</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {VoteComponents}          
        </tbody>
      </table>
    );
  }

}

export { Votes };