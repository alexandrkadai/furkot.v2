import Header from './components/header/header.component';
import Naming from './components/naming/naming.component';
import Offer from './components/offer/offer.component';
import MenuSection from './components/menu-section/menu-section.component';
import Purpose from './components/purpose/purpose.component';
import Groups from './components/groups/groups.component';
import DeliverySection from './components/delivery-section/delivery-section.component';
import Footer from './components/footer/footer.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Naming />
      <Offer />
      <MenuSection />
      <Purpose />
      <Groups />
      <DeliverySection />
      <Footer />
    </div>
  );
}

export default App;
