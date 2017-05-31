/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from "react";
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";
import {changeCheckboxData, getEquipmentNames} from "../actions/index";

class Equipment extends Component {
  constructor(props){
    super(props);
    this.props.getEquipmentNames();
  }

  render() {
    let buttons = Object.values(this.props.equipmentNames).map((menu) => {
      if (this.props.checked[menu]) {
        return (
          <Checkbox key={menu} inline checked
                    onChange={(event) => this.props.onChange(menu, event.target.checked)}>{menu}</Checkbox>
        );
      } else {
        return (
          <Checkbox key={menu} inline
                    onChange={(event) => this.props.onChange(menu, event.target.checked)}>{menu}</Checkbox>
        );
      }
    });
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (prop, value) => dispatch(changeCheckboxData(prop, value)),
    getEquipmentNames: () => dispatch(getEquipmentNames()),
  }
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkboxData.checked,
    equipmentNames: state.checkboxData.equipmentNames,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);