import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { isValidEmail, isValidFirstLastName, isValidPassword, isValidUsername, } from "../util";
import { useSnackbar } from "../context/SnackbarContext";
import { signup } from "../api/UsersAPI";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import ButtonSpinner from "../components/ButtonSpinner";

export default function SignUp() {
  const { openSuccessMessage, openErrorMessage } = useSnackbar();
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false); 

  const [formValues, setFormValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      username: isValidUsername(formValues.username) ? "" : "Invalid username",
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      firstName: isValidFirstLastName(formValues.firstName)
        ? ""
        : "Invalid first name",
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      lastName: isValidFirstLastName(formValues.lastName)
        ? ""
        : "Invalid last name",
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      email: isValidEmail(formValues.email) ? "" : "Invalid email",
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      password: isValidPassword(formValues.password) ? "" : "Invalid password",
    }));

    return (
      isValidUsername(formValues.username) &&
      isValidFirstLastName(formValues.firstName) &&
      isValidFirstLastName(formValues.lastName) &&
      isValidEmail(formValues.email) &&
      isValidPassword(formValues.password)
    );
  };

  const handleSignupMessage = async () => {
    setLoading(true);
    await signup(
      formValues,
      (successMsg, user) => {
        openSuccessMessage(successMsg);
        setUser(user);
        navigate("/", {
          state: { username: formValues.username }
        });
      },
      openErrorMessage
    );
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      await handleSignupMessage();
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleChange}
                value={formValues.username}
                error={!!formErrors.username}
                helperText={formErrors.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                value={formValues.firstName}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
                value={formValues.lastName}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={formValues.email}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formValues.password}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: 36 }}
          >
            {loading ? <ButtonSpinner /> : "Sign Up"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
