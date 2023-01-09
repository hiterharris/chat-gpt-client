import './App.css';
import { Generator } from './components';
import book from "./assets/book.png"

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h3>Bedtime Story</h3>
        <img src={book} className="icon" alt="book icon"/>
      </header>
      <Generator />
    </div>
  );
}

export default App;
