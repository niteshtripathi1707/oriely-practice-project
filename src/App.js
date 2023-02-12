import './App.css';
import Expenses from './components/Expenses';

function App() {

  const items = [
    {
      id: 1,
      title: 'Car',
      amount: 3000,
      date: new Date()
    },
    {
      id: 2,
      title: 'Bike',
      amount: 2000,
      date: new Date()
    },
    {
      id: 3,
      title: 'Bus',
      amount: 4000,
      date: new Date()
    },
    {
      id: 4,
      title: 'Train',
      amount: 10000,
      date: new Date()
    },
  ]
  return (
    <div className="App">
      <h1>Expense Items App</h1>
      <Expenses expenses={items}></Expenses>
    </div>
  );
}

export default App;
