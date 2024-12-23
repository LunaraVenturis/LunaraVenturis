import { Navbar } from './components/Header/Navbar'
import { Footer } from './components/Footer/Footer'
import { LeaderBoards } from './components/Pages/LeaderBoards';
import { Login } from './components/Pages/LoginForm/Login';
import { Home } from './components/Pages/HomePage';
import { Lobby } from './components/Pages/Lobby';
import { Register } from './components/Pages/LoginForm/Register';
import { TOS } from './components/Generalist/TOS';
function App() {
  let Component;
  switch (window.location.pathname){
    case "/HomePage":
      Component = Home;
      break;
    case "/Login":
      Component = Login;
      break;
    case "/LeaderBoards":
      Component = LeaderBoards;
      break;
    case "/Lobby":
      Component = Lobby;
      break;
    case "/Register":
      Component = Register;
      break;
      case "/TOS":
        Component = TOS;
        break;
      default :
      Component = Home;
  }
  return (
    <>
     <Navbar/>
     <Component/>
     <Footer/>
    </>
   
  );
}


export default App;
