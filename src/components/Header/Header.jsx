import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span navbar-brand">
          <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>

          <img width="126" height="43"
               src="https://i2.wp.com/fractal.ai/wp-content/uploads/2018/02/header-black-logo.png?fit=126%2C43&amp;ssl=1"
               className="image wp-image-2982  attachment-full size-full" alt="Fractal Analytics"
               style={{maxWidth: '100%', height: 'auto'}} />

        <span className="header__span"> - Todo App</span>
      </nav>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
