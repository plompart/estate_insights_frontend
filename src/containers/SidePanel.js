/**
 * Created by Patryk on 2017-04-02.
 */

import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import Location from "../components/Location";
import MainInfo from "../components/MainInfo";
import Equipment from "../components/Equipment";
import {submitCoordinates, submitData} from "../actions/index"
import {connect} from "react-redux";
import {Form} from "react-redux-form";

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
          <Form
            model="form.inputForm"
            onSubmit={() => {
              this.props.submitData();
              this.props.submitCoordinates();
            }}
          >
            <Location/>
            <MainInfo/>
            <Equipment/>
            <button type="submit" className="btn btn-default">
              Wyceń
            </button>
          </Form>
        </Menu>
      </MenuWrap>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitData: () => dispatch(submitData()),
    submitCoordinates: () => dispatch(submitCoordinates())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
