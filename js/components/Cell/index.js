import React from 'react';
import extend from 'object-assign';
import { List, Map } from 'immutable';
import styles from './style.sass';

export default function Cell(props) {

  return (
    <td className="cell"
      onClick={() => props.actions.makeMove(props.row, props.col)}
    >
    </td>
  );
}

Cell.propTypes = {
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired
};
