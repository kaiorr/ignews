const theme = {
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6B2AEE",
      dark: "#581ECD",
    },
    secondary: {
      light: "#2bfff2",
      main: "#02E7D9",
      dark: "#1dd6cb",
    },
    text: {
      primary: "#707070",
      secondary: "#9B9B9B",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
};

export default theme;
