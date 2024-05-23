// project import
import Routes from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import { Provider } from 'react-redux';
import store from './app/store';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (

  <ThemeCustomization>
    <Provider store={store}>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </Provider>
  </ThemeCustomization>

);

export default App;
