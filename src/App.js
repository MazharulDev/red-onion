import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './components/BreakFast/BreakFast';
import Cart from './components/Cart/Cart';
import Dinner from './components/Dinner/Dinner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<BreakFast></BreakFast>}></Route>
          <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/cart' element={
         <RequireAuth>
           <Cart></Cart>
         </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
