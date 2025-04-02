import './App.css';
import Header from './components/layout/Header/Header';
import Meals from './components/Meals/Meals';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
      <Menu />
    </div>
  );
}

export default App;
