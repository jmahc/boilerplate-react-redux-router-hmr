// ==== Node Modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
// ==== Local Files
import { incrementAsync } from 'actions/counter';

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
          {count} + 1
        </h1>
        <RaisedButton primary onClick={onIncrementClick}>
          Increment Counter...!!!!!!
        </RaisedButton>
        <Link to="/about">
          Go to about route
        </Link>
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
