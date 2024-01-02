import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/system/Box";
import { Avatar, Typography } from "@mui/material";

import avatar from "./assets/IMG-5640.png";

import Form from "./form";

const Theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Box
        component="section"
        sx={{
          width: "100wh",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "100px 1fr",
          gridTemplateAreas: `
            "header"
            "content"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#7448ff",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ padding: "0px 0px 0px 10px" }}
          >
            InflightIt - Challenge
          </Typography>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "0px 10px 0px 0px",
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ paddingRight: "10px" }}
            >
              Ruben Mendes, a24824
            </Typography>
            <Avatar
              alt="Ruben Mendes - avatar"
              src={avatar}
              sx={{ width: 70, height: 70 }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: "content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "80%", width: "60%" }}>
            <Form />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
