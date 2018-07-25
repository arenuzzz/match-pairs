import React, { Component } from "react";

const onInterval = refreshTime => WrappedComponent => {
  return class WithInterval extends Component {
    constructor() {
      super();
      this.state = { ticks: 0 };
      this.interval = setInterval(this.tick, refreshTime);
    }

    tick = () => {
      this.setState({ ticks: this.state.tick + 1 });
    };

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default onInterval;
