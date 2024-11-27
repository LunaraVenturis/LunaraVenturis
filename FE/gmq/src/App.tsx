import CardList from './components/CardList/CardList'
import { CardData } from './components/Card/CardData'



function App() {
  return (
    <div className="App">
    <CardList cards={CardData}/>
    </div>
  );
}


export default App;
