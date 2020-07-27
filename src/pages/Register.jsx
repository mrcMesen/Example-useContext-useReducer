import React from 'react';

import { makeStyles } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import { Form } from '../components/Form';
import { BackButton } from '../components/BackButton';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hr: {
    width: '100%',
  },
  wrapperBack: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export const Register = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.root}>
      <Divider className={classes.hr} />
      <BackButton />
      <Form />
    </Container>
  );
};
