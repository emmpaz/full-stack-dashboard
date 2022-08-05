import { createTheme } from "@mui/material/styles";

const JoshTheme = createTheme({
    typography: {
      fontFamily: "PoppinsLight"
    },
    palette: {
      primary: {
        main: '#00C832',
      },
      error: {
        main: '#E92C2C'
      },
      success: {
        main: '#00C832',
      }
    }
  });

  export default JoshTheme;