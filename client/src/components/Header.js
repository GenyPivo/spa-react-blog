import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/Button';

const style = {
  margin: 12,
};

const Header = () => (
  <div>
    <Link to='/'>
      <RaisedButton label="Primary" secondary style={style} >
        Categories list
      </RaisedButton>
    </Link>
    <Link to='/categories/add'>
      <RaisedButton label="Secondary" secondary style={style} >
        Create new category
      </RaisedButton>
    </Link>
  </div>
);

export default Header
