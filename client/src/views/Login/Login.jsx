import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        BLUETUNE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const iniciarSesion = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      const usuarioEncontrado = response.data;
      console.log(usuarioEncontrado);
      if (usuarioEncontrado) {
        if (data.email === usuarioEncontrado.email) {
          navigate("/bluetune");
          return;
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "El usuario no existe!",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error inesperado!",
      });
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/350845429_638950871089606_838695217375902869_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=MtWO4rDyuEQAX-Q2BHv&_nc_ht=scontent.feze12-1.fna&oh=00_AfBhF1zPDp27ebg1OYSeMTqZcTHy4pT5dcbflog-OHYEtA&oe=647E348E)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Hola de nuevo!
            </Typography>
            <Box
              component="form"
              validate="true"
              onSubmit={handleSubmit(iniciarSesion)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">El campo e-mail es requerido</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="contraseña"
                id="contraseña"
                autoComplete="current-contraseña"
                className="textolog"
                {...register("contraseña", {
                  required: true,
                })}
              />
              {errors.contraseña?.type === "required" && (
                <p className="text-danger">El campo contraseña es requerido</p>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar mi cuenta"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Aún no tenes cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
