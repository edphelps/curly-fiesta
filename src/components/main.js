import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Container, Row, Col, Button } from 'reactstrap'
import { Button } from 'react-materialize'
import { toggleAddFormAC } from '../actions/video-actions';

// xx
import { toggleTeaser } from '../actions/video-actions'



// Main component directly connect()'ed to redux to handle the "Add" button
// TODO: convert to a functional component
class Main extends Component {

  onclickToggleForm = (e) => {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log("Main::onclickToggleForm(), props", this.props);
    console.log('Main::onclickToggleForm(), toggleAddFormAC: ', toggleAddFormAC);
    this.props.dispatch(toggleAddFormAC());
  }

  render() {
    console.log("Main::render(), props: ", this.props);

    let addFormToggleBtn =
      (this.props.isAddFormVisible)
      ? <Button onClick={this.onclickToggleForm} >Cancel</Button>
      : <Button onClick={this.onclickToggleForm} >Add Post</Button>;

    return (
      <div>
        {addFormToggleBtn}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("*** Main::mapStateToProps(), state: ", state);
  return {
    isAddFormVisible: state.isAddFormVisibleRD,
 }
}
export default connect(
    mapStateToProps,
    null
  )(Main)

// export default connect(
//   (state) => ({isAddFormVisible: state.isAddFormVisibleRD}),
//   null)(Main)
