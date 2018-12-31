import {
  TOGGLE_ADD_FORM,
} from '../constants.js'

export const getVideoRequest = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_REQUEST',
    })
  }
}

export const getVideoSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_SUCCESS',
      payload: {
        data,
      }
    })
  }
}

export const getVideoFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_FAILURE',
      payload: {
        error,
      }
    })
  }
}

export const toggleTeaser = () => {
  console.log("action: toggleTeaser")
  return dispatch => {
    dispatch({
      type: 'TOGGLE_TEASER',
    })
  }
}

/* *****************************************************
*  toggleAddFormAC()
*  Called by Main component Add Form button to toggle Add Form visibility
******************************************************** */
export const toggleAddFormAC = () => {
  console.log("toggleAddFormAC()");
  return {
    type: TOGGLE_ADD_FORM,
  }
}
