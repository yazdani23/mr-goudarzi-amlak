
import './assets/css/App.css';
import RoutesMap from './routes';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesMap />
      <Footer />
    </BrowserRouter>


  );
}

export default App;
