import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickButton } from './actions'

class App extends Component {

  constructor(props){
    super(props);

    console.log(this.props);
  }

  state = {
    inputValue: ''
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { newValue, newValue2, clickButton } = this.props;
    return (
      <div style={{ padding: '10px' }}>
        <h1> Aprendendo Redux </h1>
        <input type='text' onChange={this.handleInputChange} value={this.state.inputValue} />
        <button onClick={() => clickButton(this.state.inputValue)}> ENVIAR </button>
        <h4> {newValue} && {newValue2} </h4>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue2: store.clickState.newValue2
})


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
