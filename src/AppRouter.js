import React, { useState } from 'react';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

import Home from './Home';
import Rooms from './Components/Rooms/Rooms';
import SingleRoom from './Components/Rooms/SingleRoom';
import ErrorRoom from './Components/Rooms/ErrorRoom';

import logo from './images/logo.png';
//import logo from './images/logo.svg';

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' style={{ width: '150px', height: 'auto' }} />
            </Link>
            <button type='button' className='nav-btn' onClick={handleToggle}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/rooms' activeClassName='active'>
                ROOMS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/rooms' component={Rooms} exact={true} />
        <Route path='/rooms/:id' component={SingleRoom} />
        <Route component={ErrorRoom} />
      </Switch>
    </>
  );
};

export default AppRouter;
