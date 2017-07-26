/**
 * Created by Patryk on 2017-04-10.
 */

import React, {Component} from "react";
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

class EquipmentView extends Component {
  ifContainsFalse(data){
    if(Object.values(data).indexOf(true) === -1){
      return true;
    }
    return false;
  }

  render() {
    let buttons = Object.values(this.props.equipmentNames).map((menu) => {
      if (this.props.checked[menu]) {
        return (
          <Checkbox key={menu} inline checked readOnly>{menu}</Checkbox>
        );
      }
      return null;
    });
    if (!this.ifContainsFalse(this.props.checked)) {
      return (
        <ListGroup>
          <ListGroupItem active>Wyposażenie</ListGroupItem>
          <ListGroupItem>
            <FormGroup>
              {buttons}
            </FormGroup>
          </ListGroupItem>
        </ListGroup>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    checked: state.serverData.checked,
    equipmentNames: state.serverData.equipmentNames,
  }
};

export default connect(mapStateToProps, null)(EquipmentView);