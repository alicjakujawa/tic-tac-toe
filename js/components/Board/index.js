import React, { Component, PropTypes } from 'react';
import Row from '../Row/';
import _ from "lodash";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import styles from './style.sass'


class Board extends Component {

  render() {
    return (
      <table className="board">
        <tbody>
          {[0,1,2].map(r =>
            <Row row={r} board={this.props.board} actions={this.props.actions} key={r}/>
          )}
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  board: React.PropTypes.instanceOf(List).isRequired,
  actions: React.PropTypes.object.isRequired
};

export default connect()(Board)
