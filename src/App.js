import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Basket from './pages/Basket';
import Favorite from './pages/Favorite'
import CreateAdvertisement from './pages/CreateAdvertisement';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Main/>} />
      <Route path="basket" element={<Basket/>} />
      <Route path="favorite" element={<Favorite/>} />
      <Route path="createadvertisement" element={<CreateAdvertisement/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
