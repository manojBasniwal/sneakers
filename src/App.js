import CartPage from 'screens/CartPage';
import Women from './screens/Women';
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Men from './screens/Men';
import Collection from 'screens/Collection';
import About from 'screens/About';
import Contact from 'screens/Contact';
import Login from 'screens/Login';
import DetailsPage from 'screens/DetailsPage';
import LoginHandle from 'components/LoginHandle';



function App() {
  return (
      <BrowserRouter>
      <LoginHandle/>
        <Routes>
          <Route exact path="/" element={<Collection/>}></Route>
          <Route exact path="/women" element={<Women/>}></Route>
          <Route exact path="/cart" element={<CartPage/>}/>
          <Route exact path="/details" element={<DetailsPage/>}/>
          <Route exact path="/men" element={<Men/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={ <Contact/>}/>
          <Route exact path="/login" element={ <Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
