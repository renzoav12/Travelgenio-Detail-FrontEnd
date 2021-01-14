import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import Root from './components/Root/root';
import { MuiThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header, Footer } from '@hotels/header-footer';
import createTheme from '@hotels/styles';
import { Provider } from 'react-redux';
import { useMediaQuery } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 760,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {

  return (
    <MuiThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Provider store={store}>
        <Header />
        <Root store={store} />
        <Footer />
      </Provider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();