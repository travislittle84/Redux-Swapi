// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export function getCharacters() {
    return (dispatch) => {
        dispatch({ type: FETCHING, payload: { isFetching: true} })

        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: {
                        characters: res.data.results,
                        isFetching: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_FAILED,
                    payload: {
                        error: error.response,
                        isFetching: false
                    }
                })
            })
    }
}

