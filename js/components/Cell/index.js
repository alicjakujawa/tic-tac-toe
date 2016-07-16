import React from 'react';
import extend from 'object-assign';
import { List, Map } from 'immutable';
import Player from '../../lib/Player';
import styles from './style.sass';

export default function Cell(props) {
  const styles = getStyles(props.owner, props.row, props.col);
  return (
    <td className={styles}
      onClick={() => props.actions.makeMove(props.row, props.col)}
    >
    </td>
  );
}

Cell.propTypes = {
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired
};

function getStyles(owner, row, col) {
  let classes = "cell";
  if (owner === Player.None) return classes;
  return owner === Player.computer ? "cell cell--cross" : "cell cell--nought";
}
