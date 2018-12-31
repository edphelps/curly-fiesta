import { combineReducers } from 'redux'
import video from './video-reducer'
import isAddFormVisibleRD from './isAddFormVisibleRD'

export default combineReducers({
  video,
  isAddFormVisibleRD,
})
