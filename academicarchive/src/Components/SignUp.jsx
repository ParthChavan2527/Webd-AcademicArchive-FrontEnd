import React, { useState, useEffect } from 'react';
import { Box, Container, TextField, Button, Typography} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { animateCircles } from '../Animation/signup-animaiton';

const SignUpItems = styled(Container)(({ theme }) => ({
  height: 'auto',
  width: '90vw',
  maxWidth: '400px',
  marginTop: '10vmin',
  padding: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  [theme.breakpoints.up('sm')]: {
    width: '50vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '30vw',
  },
}));

const Inputs = styled(Box)`
  margin-top: 3vmin;
  display: flex;
  flex-direction: column;
  gap: 2vmin;
`;

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '20px',
  fontWeight: 600,
  fontSize: '4vmin',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3vmin',
  },
}));

const ButtonDiv = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledButton = styled(Button)(({ theme }) => ({
  width: '70%',
  marginTop: '20px',
  backgroundColor: '#007bff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  marginRight : '0.5vmin'
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  width: '70%',
  backgroundColor: '#007bff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

const LoginItems = styled(Container)(({ theme }) => ({
  height: 'auto',
  width: '90vw',
  maxWidth: '400px',
  marginTop: '10vmin',
  padding: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  [theme.breakpoints.up('sm')]: {
    width: '50vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '30vw',
  },
}));

const Signup = () => {
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [logindata, setLogindata] = useState({
    Username: '',
    Password: '',
  });

  const navigate = useNavigate(); // Navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountChange = () => {
    setAccount((prevAccount) => (prevAccount === 'Signup' ? 'login' : 'Signup'));
  };

  const [account, setAccount] = useState('Signup');

  const handleSubmit = () => {
    navigate('/home');
  };

  useEffect(() => {
    const stopAnimation = animateCircles();

    return () => {
      stopAnimation(); 
    };
  }, []);

  return (
    <>
      {account === 'Signup' ? (
        <SignUpItems>
          <StyledTypography>Sign Up</StyledTypography>

          <Inputs>
            <TextField
              variant="outlined"
              label="Username"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Inputs>

          <ButtonDiv>
            <StyledButton variant="contained" onClick={handleSubmit}>
              SignUP As User
            </StyledButton>
            <StyledButton variant="contained" onClick={()=>{navigate('admin')}}>
              SignUP As Admin
            </StyledButton>
          </ButtonDiv>

          {/* <Typography align="center" style={{ marginTop: '1vmin', fontWeight: 600 }}>
            OR
          </Typography> */}

          {/* <ButtonDiv>
            <StyledButton variant="contained" onClick={()=>{navigate('admin')}}>
              Sign in As Admin
            </StyledButton>
          </ButtonDiv> */}

          <Typography align="center" style={{ margin: '1vmin 0vmin', fontWeight: 600 }}>
            OR
          </Typography>

          <ButtonDiv>
            <StyledButton2 variant="contained" onClick={handleAccountChange}>
              Already Have an Account?
            </StyledButton2>
          </ButtonDiv>
        </SignUpItems>
      ) : (
        <LoginItems>
          <StyledTypography>Login</StyledTypography>

          <Inputs>
            <TextField
              variant="outlined"
              label="Username"
              name="Username"
              value={logindata.Username}
              onChange={handleLoginChange}
              required
            />
            <TextField
              variant="outlined"
              label="Password"
              name="Password"
              value={logindata.Password}
              type="password"
              onChange={handleLoginChange}
              required
            />
          </Inputs>

          <ButtonDiv>
            <StyledButton variant="contained" onClick={handleSubmit}>
              Login in As User
            </StyledButton>
            <StyledButton variant="contained" onClick={()=>{navigate('admin')}}>
              Login in As Admin
            </StyledButton>
          </ButtonDiv>

          <Typography align="center" style={{ margin: '1vmin 0vmin', fontWeight: 600 }}>
            OR
          </Typography>

          <ButtonDiv>
            <StyledButton2 variant="contained" onClick={handleAccountChange}>
              Don't Have an Account?
            </StyledButton2>
          </ButtonDiv>
        </LoginItems>
      )}
    </>
  );
};

export default Signup;
