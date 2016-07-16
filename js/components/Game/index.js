import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/gameActions';
import { getGame } from '../../reducers/game';
import Board from '../Board/';
import { List } from 'immutable';
import styles from './style.sass';

class Game extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="wrapper">
      	<Board board={this.props.board} actions={this.props.actions} />
      </div>
    );
  }
}

Game.propTypes = {
  actions: React.PropTypes.object.isRequired,
  board: React.PropTypes.instanceOf(List).isRequired
};

export default connect(getGame, (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }))(Game)
