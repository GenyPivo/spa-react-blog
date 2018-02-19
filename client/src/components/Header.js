import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

const Header = () => (
  <div className="ui two item menu">
    <Link to='/' className="item">

        Categories list
    </Link>
    <Link to='/categories/add' className="item">
        Create new category
    </Link>
  </div>
);

export default Header
