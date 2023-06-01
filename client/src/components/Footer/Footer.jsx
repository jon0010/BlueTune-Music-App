import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Footer.css";

const Copyright = () => {
  return (
    <Typography style={{ textAlign: "center" }} variant="body2" color="white">
      {"Copyright © "}
      <a style={{ textDecoration: "none" }} href="/">
        JN Pereyra - Prueba Tecnica
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Footer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
          className="fixed-bottom"
        >
          <Container maxWidth="sm">
            <Typography
              variant="body1"
              style={{ textAlign: "center" }}
            ></Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
