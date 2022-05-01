import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue900, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: lightBlue900
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: lightBlue900,
  }
});


export default themeDefault;
