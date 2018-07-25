import React, { Component } from "react";
import { connect } from "react-redux";

import Timer from "components/Timer";
import StatItem from "components/StatItem";

import { finishGame } from "actions";
import { getGameTime, getGameLocked } from "selectors";

class GameTimer extends Component {
  state = { mins: 0, secs: 0, flag: true };

  componentWillReceiveProps(nextProps) {
    if (this.state.flag && nextProps.mins) {
      this.setState({ mins: nextProps.mins, secs: 0, flag: false });
    }
    if (!nextProps.isLocked && this.interval === undefined) {
      this.interval = setInterval(this.tick, 1000);
      this.tick();
    }
  }
  tick = () => {
    let { mins, secs } = this.state;
    if (secs === 0) {
      mins--;
      secs = 59;
    } else {
      secs--;
    }
    mins < 0 ? this.finishGame() : this.setState({ mins, secs });
  };

  finishGame = () => {
    this.props.finishGame();
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <StatItem label="Timer">
        <Timer {...this.state} />
      </StatItem>
    );
  }
}

const mapStateToProps = state => ({
  mins: getGameTime(state),
  isLocked: getGameLocked(state)
});

export default connect(
  mapStateToProps,
  { finishGame }
)(GameTimer);
