import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  Alert,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { signInFail, signInStart, signInSuccess } from '../../redux/Auth/authSlice';
import { storeToken } from 'Services/Services/LocalStorageServices';
import logo from '../../assets/images/magneta logo copy.png';
import image1 from '../../assets/images/landing page.png';
import image2 from '../../assets/images/image2.png';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#F24C3D'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     navigate('/main/dashboard/default');
  //   }
  // }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.toLowerCase().trim()
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(formData,"ikhlas1");
    try {
      setLoading(true);
      dispatch(signInStart());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/accounts/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response,"Response");
      const data = await response.json();
      if (data.user) {
        dispatch(signInSuccess(data));
        storeToken(data.user.token, data.user.token);
        localStorage.setItem('user', JSON.stringify(data));
        enqueueSnackbar(data.msg, { variant: 'success' });
        navigate('/main/dashboard/default');
        setFormData({});
      } else {
        dispatch(signInFail(data.error));
        setError(data.error);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      enqueueSnackbar(error, { variant: 'error' });
      navigate('/main/dashboard/default');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Box
      className="bg-red-50"
      sx={{
        // backgroundImage: `url(${backdrop})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="-z-2 absolute bottom-10 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
      <div className="-z-2 absolute -top-10 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
      <div className="-z-2 absolute top-10 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
      <div className="-z-2 absolute bottom-10 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>

      <div className="-z-1 absolute top-1/3 right-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
        <img
          src={image1}
          alt=""
          className="rounded-full opacity-100 w-full max-w-xs sm:max-w-xs max-h-xs md:max-w-sm max-h-sm lg:max-w-sm max-h-sm xl:max-w-md max-h-md"
        />
      </div>
      <div className="-z-1 absolute top-1/1 left-1/2 transform translate-x-3/4 translate-y-1/4 -rotate-12">
        <img
          src={image2}
          alt=""
          className="rounded-full opacity-100 w-full max-w-xs sm:max-w-xs max-h-xs md:max-w-xs max-h-xs lg:max-w-xs max-h-xs xl:max-w-xs max-h-xs"
        />
      </div>
      <div className="-z-2 absolute bottom-10 right-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
      <div className="-z-2 absolute top-10 right-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
      {/* <div className="-z-10  transform   h-full w-full">
        <div className=" -z-10 absolute inset-0  bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${backdrop})` }}></div>

        <img src={image1} alt="" className="absolute inset-0 h-full w-full rounded-full object-cover" />
      </div> */}
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="w-[150px] mb-2">
              <img src={logo} alt="logo" style={{ width: '100%' }} />
            </div>
            <Typography component="h1" variant="h5" className="text-red-500">
             Distributor Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              {error.email && <Alert severity="error">{error.email}</Alert>}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff className="text-red-400" /> : <Visibility className="text-red-400" />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {error.password && (
                  <Alert severity="error" className="mt-2">
                    {error.password}
                  </Alert>
                )}
              </FormControl>
              {error.general && <Alert severity="error">{error.general}</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="bg-primary hover:text-white"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Sign In'}
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  </>
  );
};

export default Signin;
