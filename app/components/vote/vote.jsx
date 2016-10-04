import React from 'react';

class Vote extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    const {date,user,mood,id} = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{mood}</td>
        <td>{date}</td>
      </tr>
    );
  }

}

export { Vote };