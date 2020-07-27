import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Register } from '../../context/RegisterContext';

import { makeStyles } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: 25,
    width: '100%',
  },
}));

export const Form = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ name: '', lastName: '', profession: '' });
  const { add } = useContext(Register);
  const history = useHistory();
  const SuccessAlert = withReactContent(Swal);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const handleSave = e => {
    e.preventDefault();
    /**Save Action */
    add(form);
    SuccessAlert.fire({
      title: 'Success!',
      text: 'Return Home to see the result',
      icon: 'success',
      confirmButtonText: 'Go!',
    }).then(result => {
      result && history.push('/home');
    });
  };

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSave} className={classes.form}>
        <TextField
          name='name'
          label='Name'
          value={form.name}
          onChange={handleChange}
          required
          className={classes.input}
        />
        <TextField
          name='lastName'
          label='Last Name'
          value={form.lastName}
          onChange={handleChange}
          required
          className={classes.input}
        />
        <TextField
          name='profession'
          label='Profession'
          value={form.profession}
          onChange={handleChange}
          required
          className={classes.input}
        />
        <Button variant='contained' color='primary' type='submit'>
          Save Register
        </Button>
      </form>
    </Container>
  );
};
