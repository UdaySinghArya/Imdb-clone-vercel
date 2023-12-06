import './App.css';

//components
import Home from './Pages/Home';
import CategoryMovies from './Pages/CategoryMovies';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { routePath } from './constants/route';

function App() {
  return (
   <Router>
    <Routes>
      <Route path={routePath.home} element={<Home/>} />
      <Route path={routePath.categories} element={<CategoryMovies/>} />
      <Route path={routePath.invalid} element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
