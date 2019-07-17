import React, { Component } from "react";
import { connect } from 'react-redux'
import { CharacterListView } from "./views";
import { getCharacters } from './actions/index'
import "./styles/App.css";

class App extends Component {

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    return <CharacterListView />;
  }
}

const mapDispatchToProps = {
  getCharacters
}

export default connect(null, mapDispatchToProps)(App);
