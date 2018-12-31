import { TOGGLE_ADD_FORM } from '../constants';

/* ***********************************************
*  isAddFormVisibleRD
*  state is a boolean to determine if the Add Form is visible
************************************************** */
const isAddFormVisibleRD = (state = false, action) => {
  console.log("isAddFormVisibleRD::state: ", state);
  console.log("isAddFormVisibleRD::action: ", action);

  switch(action.type) {

    // user clicked on the Add Form toggle button
    case TOGGLE_ADD_FORM:
      console.log("isAddFormVisibleRD::TOGGLE_ADD_FORM, state becoming: ", !state);
      return !state;

    default:
      return state;
  }
}

export default isAddFormVisibleRD
