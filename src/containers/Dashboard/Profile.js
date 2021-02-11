import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  statImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  title: {
    fontSize: 60,
    color: '#fbebd1',
    textShadow: '-2px 2px #888',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  header3: {
    fontSize: 25,
    lineHeight: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    textJustify: 'inter-character',
    color: '#fbebd1',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  dropDown: {
    minWidth: '100px',
  },
  formControl: {
    width: '100%'
  },
  textAlign: 'justify',
  color: '#fbebd1',
}))

const temp = {
  firstName: 'سید علیرضا',
  lastName: 'هاشمی',
  grade: 'هفتم',
  nationalCode: '1273067185',
  phone1: '09140914091',
  phone2: '09123456789',
  schoolName: 'شهید اژه‌ای',
  schoolPhone: '031-31234233',
  city: 'اصفهان',
  province: 'اصفهان',
  principalPhone: '09999999999',
  hasPaidBefore: 'false',
}

const ProfileTab = ({
  oldInfo = temp,
}) => {
  const classes = useStyles();
  const [info, setInfo] = useState(temp);

  const onChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
  }

  console.log(info);

  return (
    <Container style={{ overflowY: 'hidden' }}>
      <div className={`dashboard-background blur`} />
      <Grid
        className={classes.root}
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <Typography variant='h2' className={classes.title} align='center'>
            ویرایش اطلاعات
          </Typography>
        </Grid>
        <Grid item container justify='space-evenly' alignItems='center' spacing={6} xs={12}>
          <Grid item xs={12} sm={8} container direction='column' justify='center' alignItems='center' spacing={4}>
            <Grid
              item container
              justify='center'
              alignItem='center'
              spacing={2}>
              <Paper className={classes.paper}>
                <Grid item container spacing={1} justify='center' alignItems='center'>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='firstName' label='نام' value={info.firstName} variant='outlined' required onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='lastName' label='نام خانوادگی' value={info.lastName} variant='outlined' required onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='nationalCode' label='کد ملی' value={info.nationalCode} disabled variant='outlined' onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='phone1' label='شماره موبایل' value={info.phone1} disabled variant='outlined' onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">پایه</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.grade}
                        onChange={onChange}
                        name='grade'
                        required
                      >
                        <MenuItem value="">انتخاب کنید</MenuItem>
                        <MenuItem value={'هفتم'}>هفتم</MenuItem>
                        <MenuItem value={'هشتم'}>هشتم</MenuItem>
                        <MenuItem value={'نهم'}>نهم</MenuItem>
                      </Select>
                    </FormControl >
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField name='phone2' label='شماره موبایل زاپاس' required variant='outlined' onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={6} justify='center'>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item container
              justify='center'
              alignItem='center'
              spacing={2}>
              <Paper className={classes.paper}>
                <Grid item container spacing={1} justify='center' alignItems='center'>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField label='نام مدرسه' value={info.schoolName} variant='outlined' required onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">شهر</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.city}
                        onChange={onChange}
                        required
                      >
                        <MenuItem value="">انتخاب کنید</MenuItem>
                        <MenuItem value={'هفتم'}>هفتم</MenuItem>
                        <MenuItem value={'هشتم'}>هشتم</MenuItem>
                        <MenuItem value={'نهم'}>نهم</MenuItem>
                      </Select>
                    </FormControl >
                  </Grid>
                  <Grid item container xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">استان</InputLabel>
                      <Select
                        className={classes.dropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={info.province}
                        onChange={onChange}
                        required
                      >
                        <MenuItem value="">انتخاب کنید</MenuItem>
                        <MenuItem value={'هفتم'}>هفتم</MenuItem>
                        <MenuItem value={'هشتم'}>هشتم</MenuItem>
                        <MenuItem value={'نهم'}>نهم</MenuItem>
                      </Select>
                    </FormControl >
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField label='شماره تلفن مدرسه' value={info.schoolPhone} variant='outlined' onChange={onChange} />
                  </Grid>
                  <Grid item container xs={12} sm={3} justify='center'>
                    <TextField label='شماره موبایل مدیر' value={info.principalPhone} variant='outlined' onChange={onChange} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.statImage} />
        </Grid>
      </Grid >
    </Container >
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(ProfileTab);