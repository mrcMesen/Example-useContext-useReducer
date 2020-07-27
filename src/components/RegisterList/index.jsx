import React, { useContext } from 'react';
import { Register } from '../../context/RegisterContext';

import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}));

export const RegisterList = () => {
  const classes = useStyles();
  const { registerList } = useContext(Register);

  return (
    <List className={classes.root}>
      {registerList.map(register => {
        const { id, name, lastName, profession } = register;
        return (
          <React.Fragment key={id}>
            <ListItem alignItems='center'>
              <ListItemAvatar>
                <Avatar className={classes.purple}>{`${name.charAt(0)}${lastName.charAt(0)}`}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${name} ${lastName}`}
                secondary={
                  <>
                    <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                      Profession
                    </Typography>
                    {` — ${profession}`}
                  </>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </React.Fragment>
        );
      })}
    </List>
  );
};
