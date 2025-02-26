import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './screens/Home';
import Cart from './screens/Cart';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
