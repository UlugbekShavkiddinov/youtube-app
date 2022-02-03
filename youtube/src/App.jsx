import logo from './logo.svg';
import './App.scss';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnAuthenticatedApp';

import useToken from './Hooks/useToken';

function App() {
  const [isLoggedIn] = useToken();


  if (isLoggedIn) {
    return <AuthenticatedApp />
  } else {
    return <UnauthenticatedApp />
  }
}

export default App;
