import React from 'react'
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux'
import InputFields from './Fields';

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  loginImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/login.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  title: {
    color: '#fbebd1',
  },
}))

const MobileCreateAccount = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.background}>
        <Grid
          container
          direction='column'
          justify='space-evenly'
          alignItems='stretch'
          spacing={2}>
          <Grid item className={classes.loginImage}>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant='h3' align='center' >
              برای ورود به سفینه‌ات آماده‌ای؟
            </Typography>
          </Grid>
          <InputFields />
        </Grid>
      </Container>
    </>
  )
}

export default connect(
  undefined,
  {

  }
)(MobileCreateAccount);