import React from 'react';
import extend from 'object-assign';
import { List, Map } from 'immutable';


export default function Cell(props) {

  return (
    <td
      onClick={() => console.log("click")}
    >
    </td>
  );
}

Cell.propTypes = {
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired
};
