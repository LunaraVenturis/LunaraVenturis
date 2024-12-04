import { Navbar } from './components/Header/Navbar'
import { LeaderBoards } from './components/Pages/LeaderBoards';
import { Login } from './components/Pages/Login';
import { Home } from './components/Pages/HomePage';
import { Lobby } from './components/Pages/Lobby';
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
      default :
      Component = Home;
  }
  return (
    <>
     <Navbar/>
     <Component/>
    </>
   
  );
}


export default App;
