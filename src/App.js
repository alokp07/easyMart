import './App.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Auth from './pages/userAuth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfile from './pages/profile/EditProfile';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/profile' element={<EditProfile/>}/>
      </Routes>
    </>
  );
}

export default App;
