/**
 * Created by Patryk on 2017-03-31.
 */

import React, {Component} from 'react';
import {Button, Image} from "react-bootstrap";
import logo from '../logo.png';

class MyHeader extends Component {
  render() {
    return (
      <div className="MyHeader">
        <Image src={logo} rounded className="Logo" alt="Logo"/>
        <div className="buttons">
          <Button>Zaloguj się</Button>
          <Button>Zarejestruj</Button>
        </div>
      </div>
    );
  }
}

export default MyHeader;
