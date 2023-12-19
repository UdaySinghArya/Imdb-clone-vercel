import './App.css';
import Home from './Pages/Home';
import CategoryMovies from './Pages/CategoryMovies';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { routePath } from './constants/route';
import Neww from './components/Neww';

function App() {
  return (
<Router>
  <Routes>
    <Route path={routePath.home} element={<Home />} />
    <Route path={routePath.categories} element={<CategoryMovies />} />
    <Route path={routePath.invalid} element={<Home />} />
    <Route path="/imdb/*" element={<Home />} /> 
    <Route path="/imdb/:id" element={<Neww />} />
  </Routes>
</Router>
  );
}

export default App;
