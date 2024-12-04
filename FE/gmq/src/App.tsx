import { Navbar } from './components/Header/Navbar'
import { Footer } from './components/Footer/Footer'
import { LeaderBoards } from './components/Pages/LeaderBoards';
import { Login } from './components/Pages/Login';
import { Home } from './components/Pages/HomePage';
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
