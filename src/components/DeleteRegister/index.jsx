import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  wrapperBack: {
    width: '100%',
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export const BackButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapperBack}>
      <Button variant='contained' color='default' component={Link} to='/home' startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  );
};
