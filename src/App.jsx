import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Service, Car, Fetch} from './pages';
import NavBar from './components/NavigationBar';
import Poster from './components/Poster';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Poster />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/service" element={<Service />}>
        </Route>
        <Route exact path="/car" element={<Car />}>
        </Route>
        <Route exact path="/cars" element={<Fetch />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
