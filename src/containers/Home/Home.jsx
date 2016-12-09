// ==== Node Modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
// import FontIcon from 'material-ui/FontIcon';

// ==== Local Files
import { incrementAsync } from 'actions/counter';

// const faceIcon = <FontIcon color="white" />;

class Home extends Component {
  static propTypes = {
    count: PropTypes.number,
    onIncrementClick: PropTypes.func.isRequired,
  };

  render() {
    const { count, onIncrementClick } = this.props;
    return (
      <div className="home">
        <h1>
          Current count is: {count}
        </h1>
        <RaisedButton
          default
          fullWidth
          label="Increment the counter by a value of 5!"
          onClick={onIncrementClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  routing: state.routing,
});

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => {
    dispatch(incrementAsync());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
