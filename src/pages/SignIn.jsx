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
import { useNavigate } from "react-router-dom";

import { isValidPassword, isValidUsername } from "../util";
import { useUser } from "../context/UserContext";
import { login } from "../api/UsersAPI";
import { useSnackbar } from "../context/SnackbarContext";
import ButtonSpinner from "../components/ButtonSpinner";

export default function SignIn() {
  const { openErrorMessage } = useSnackbar();

  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
      password: isValidPassword(formValues.password) ? "" : "Invalid password",
    }));

    return (
      isValidUsername(formValues.username) &&
      isValidPassword(formValues.password)
    );
  };

  const handleSuccessLogin = (userInfo, user) => {
    setUser(user);
    navigate("/");
  };

  const handleFailedLogin = (errorMessage) => {
    openErrorMessage(errorMessage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validate()) {
      console.log(formValues);
      await login(formValues, handleSuccessLogin, handleFailedLogin);
    }
    setLoading(false);
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
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
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
                error={!!formErrors.username}
                value={formValues.username}
                onChange={handleChange}
                helperText={formErrors.username}
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
                value={formValues.password}
                onChange={handleChange}
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
            {loading ? <ButtonSpinner /> : "Log In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
