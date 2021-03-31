import { ToastContainer } from 'react-toastify';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>
    <Main />
    <ToastContainer />
    <GlobalStyles />
  </>;
}

export default App;
