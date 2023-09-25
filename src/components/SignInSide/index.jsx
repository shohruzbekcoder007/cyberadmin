import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AdminLogin, LoaderWrapper } from './styles';
import { CircularProgress, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import login_pahe_img from '../../media/logo2.png'
// import { admin_me, user_signin } from '../../utils/API_urls';
// import { getRole, getToken } from './requests';
import CustomizedInput from './CustomizedInput';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import LanguageSelector from './LanguageSelector';

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

  const [pageLoading, setPageLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [haveatoken, setHaveatoken] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {pageLoading ? <LoadingPage /> : <></>}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {haveatoken ? <p>Foydalanuvchi topilmadi</p> : <p>Login yoki password noto'g'ri kiritildi</p>}
        </Alert>
      </Snackbar>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${login_pahe_img})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          // backgroundSize: 'contain',
          backgroundSize: "500px auto",
          backgroundPosition: 'center',
          backgroundColor: "#45B5AA"
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh",
            padding: "20px"
          }}
        >
          <Box component="div" noValidate sx={{ mt: 4, p: 1 }} style={{ backgroundColor: "#E9ECF1", padding: "35px 25px", border: ' 1px solid #d6d9de', borderRadius: "12px" }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", fontSize: "30px" }}>
              Kabinetga kirish
            </Typography>
            <Box sx={{my: 2}}>
              <CustomizedInput label="PINFL" callback_func={() => { }} />
            </Box>
            <Box sx={{my: 2}}>
              <CustomizedInput label="Parol" callback_func={() => { }} />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, p: 2, fontSize: 15, mb: 1, borderRadius: "12px" }}
            >
              Kirish
            </Button>
            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "15px", textAlign: "center", mb: 4 }}>
              Sizda shaxsiy kabinetingiz yo'qmi? <a href="#">Ro'yhatdan o'tish</a>
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "17px", maxWidth: '400px', color: "rgb(123, 123, 123)" }}>
              Eslatma: Ushbu sahifadan Cyber Park joriy rezidentlari foydalanishlari mumkin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Box sx={{
        position: "absolute", 
        top: 10, 
        width: "100%", 
        p: 1, 
        display: 'flex', 
        alignItems: "center", 
        justifyContent: "flex-end", 
        gap: '20px',
        padding: "20px 30px 0 0"
      }}>
      <AdminLogin>
        <PersonPinCircleRoundedIcon fontSize="large"/>
        Adminlar uchun
      </AdminLogin>
      <LanguageSelector/>
      </Box>
    </Grid>
  )
}