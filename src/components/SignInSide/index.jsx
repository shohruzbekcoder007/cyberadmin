import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoaderWrapper, LoginLogo } from './styles';
import { CircularProgress, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { token_url, user_me } from '../../utils/API_urls'
// import { getRole, getToken } from './requests'
// import { setUser } from '../../redux/action/userActions'
// import { getRole as getRoleUser } from '../../utils/getRole'
import login_pahe_img from '../../media/about-page.2f3ea62c.png' 
import { admin_me, user_signin } from '../../utils/API_urls';
import { getRole, getToken } from './requests';

const LoadingPage = () => {
    return (
      <LoaderWrapper>
        <CircularProgress color="success" />
      </LoaderWrapper>
    )
  }
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function SignInSide() {

  // let navigate = useNavigate()
  const [pageLoading, setPageLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [haveatoken, setHaveatoken] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const successfulFunctionGetToken = (response) => {
    console.log(response, response.data.token)
    sessionStorage.setItem('x-access-token', response.data.token)
    setHaveatoken(true)
    getRole(admin_me, successfulFunctionGetRole, errorFunctionGetRole)
  }

  const errorFunctionGetToken = (error) => {
    // console.log({ errorMessage: error.toString() });
    // console.error("There was an error!", error);
    setPageLoading(false)
    setOpenAlert(true)
  }

  const successfulFunctionGetRole = (response) => {
    console.log(response)
    // dispatch(setUser(response.data))
    // const user_role = getRoleUser(response.data)
    // setPageLoading(false)
    // if (user_role == "admin") {
    //   navigate(`/${user_role}/users`)
    // }else if (user_role == "student") {
    //   navigate(`/${user_role}/personalplan`)
    // }
    // else {
    //   navigate(`/${user_role}/dashboard`)
    // }
  }

  const errorFunctionGetRole = (error) => {
    // console.log({ errorMessage: error.toString() });
    // console.error("There was an error!", error);
    setPageLoading(false)
    setOpenAlert(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getToken(user_signin, {
      email: data.get('username'),
      password: data.get('password'),
    }, successfulFunctionGetToken, errorFunctionGetToken)
    setPageLoading(true)
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {pageLoading?<LoadingPage/>:<></>}
    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {haveatoken?<p>Foydalanuvchi topilmadi</p>:<p>Login yoki password noto'g'ri kiritildi</p>}
      </Alert>
    </Snackbar>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${login_pahe_img})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
          //   my: 8,
          //   mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh",
            padding: "20px"
          }}
        >
          <LoginLogo>
            <img src={require('../../media/logo.png')} alt="main logo" />
          </LoginLogo>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="User name"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Tizimga Kirish
        </Button>
      </Box>
        </Box>
      </Grid>
    </Grid>
)
        }