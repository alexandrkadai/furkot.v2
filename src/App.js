import Header from './components/header/header.component';
import Naming from './components/naming/naming.component';
import Offer from './components/offer/offer.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Naming />
      <Offer />
    </div>
  );
}

export default App;
