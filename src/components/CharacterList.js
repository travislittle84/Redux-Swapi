import React from "react";
import { connect } from 'react-redux'

import Character from "./Character";

const CharacterList = props => {
  console.log("characters props", props)
  const { isFetching, errorMessage } = props
  if (isFetching === true) {
    return <p>Loading</p>
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>
  }
  
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.charsReducer.isFetching,
    characters: state.charsReducer.characters,
    errorMessage: state.charsReducer.errorMessage
  }
}

export default connect(mapStateToProps)(CharacterList);
