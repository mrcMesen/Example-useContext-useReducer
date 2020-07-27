/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../../logo.svg';

import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactImage: {
    height: 100,
    width: 100,
    animation: '$logoReact infinite 20s linear',
  },
  '@keyframes logoReact': {
    '0%:': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  link: {
    display: 'flex',
  },
}));

export const Title = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState('home');
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    switch (path) {
      case '/':
        setActiveStep('home');
        break;
      case '/home':
        setActiveStep('home');
        break;
      case '/register':
        setActiveStep('register');
        break;
    }
  }, [path]);

  return (
    <div className={classes.root}>
      <img src={logo} alt='' className={classes.reactImage} />
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          color={activeStep === 'home' ? 'textPrimary' : 'inherit'}
          to='/home'
          component={RouterLink}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Link
          color={activeStep === 'register' ? 'textPrimary' : 'inherit'}
          to='/register'
          component={RouterLink}
          className={classes.link}
        >
          <ExitToAppIcon className={classes.icon} />
          Register
        </Link>
      </Breadcrumbs>
    </div>
  );
};
