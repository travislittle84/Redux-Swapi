import React from "react";
import { connect } from 'react-redux'

import Character from "./Character";

const CharacterList = props => {
  console.log("characters props", props)
  const { isFetching } = props
  if (isFetching === true) {
    return <p>Loading</p>
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
  }
}

export default connect(mapStateToProps)(CharacterList);
