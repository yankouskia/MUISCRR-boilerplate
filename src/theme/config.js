import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
  palette: {
    primary: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064',
      A100: '#84FFFF',
      A200: '#18FFFF',
      A400: '#00E5FF',
      A700: '#00B8D4',
      contrastDefaultColor: 'dark',
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        marginRight: '0 !important',
      },
    },
    MuiInputLabel: {
      formControl: {
        left: 'auto',
      },
    },
  },
});
