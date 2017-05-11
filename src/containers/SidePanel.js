/**
 * Created by Patryk on 2017-04-02.
 */

import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import {Button} from "react-bootstrap";
import LocationDiv from "./LocationDiv";
import MainInfoDiv from "./MainInfoDiv";
import EquipmentDiv from "./EquipmentDiv";
import {submitData} from "../actions/index"
import {connect} from "react-redux";

var MenuWrap = React.createClass({

  getInitialState() {
    return {hidden: false};
  },

  toggle() {
    this.setState({hidden: !this.state.hidden});
  },

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden: true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  },

  show() {
    this.setState({hidden: false});
  },

  render() {

    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
});

class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'stack',
      side: 'left',
      hidden: true,
    };
  };

  render() {
    const Menu = BurgerMenu[this.state.currentMenu];

    return (
      <MenuWrap wait={20} side={this.state.side}>

        <Menu
          noOverlay id={this.state.currentMenu}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          {console.log(Menu)}
          <LocationDiv/>
          <MainInfoDiv/>
          <EquipmentDiv/>
          <Button onClick={() => {
            this.props.submitData();
          }

          }>Zapisz zmiany</Button>
        </Menu>
      </MenuWrap>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitData: () => dispatch(submitData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
