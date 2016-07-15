import React from 'react';
import Cell from '../Cell/';
import { List, Map } from 'immutable';

const range = [0,1,2];

const Row = (props) => (
  <tr className="row">
    {range.map(c =>
      <Cell row={props.row}
            col={c}
            actions={props.actions}
            key={c}
      />
    )}
  </tr>
);

export default Row;

Row.propTypes = {
  actions: React.PropTypes.object.isRequired
};
