import React from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
