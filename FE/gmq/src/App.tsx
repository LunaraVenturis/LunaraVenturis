import { Navbar } from './components/Header/Navbar'
import { Footer } from './components/Footer/Footer'
import { LeaderBoards } from './components/Pages/LeaderBoards';
import { Login } from './components/Pages/LoginForm/Login';
import { Home } from './components/Pages/HomePage';
import { Lobby } from './components/Pages/Lobby';
import { Register } from './components/Pages/LoginForm/Register';
import { TOS } from './components/Generalist/TOS';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/leaderboards' element={<LeaderBoards />} />
      <Route path='/lobby' element={<Lobby />} />
      <Route path='/tos' element={<TOS />} />
     </Routes>
     <Footer/>
    </>
   
  );
}


export default App;
