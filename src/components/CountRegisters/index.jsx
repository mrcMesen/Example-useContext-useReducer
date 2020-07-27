import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/';

import { Register } from '../../context/RegisterContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    // marginBottom: 30,
  },
}));

export const CountRegisters = () => {
  const classes = useStyles();
  const { count } = useContext(Register);
  return (
    <div className={classes.root}>
      <Typography variant='h6'>Total de registros</Typography>
      <Typography variant='h2'>{count}</Typography>
    </div>
  );
};
