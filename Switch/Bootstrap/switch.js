import React, { Component } from "react";
import { MDBSwitch } from "mdbreact";

class Switch extends Component {
state = {
  switch1: true,
  switch2: false
}

handleSwitchChange = nr => () => {
  let switchNumber = `switch${nr}`;
  this.setState({
    [switchNumber]: !this.state[switchNumber]
  });
}

render() {
  return (
    <>
      <MDBSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)} />
      <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)} />
    </>
    );
  }
}

export default Switch;