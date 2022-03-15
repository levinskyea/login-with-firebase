import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import AdminDashboard from './pages/AdminDashboard';
//import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/verify-email" element={<VerifyEmail/>}/>
            <Route exact path="/admin" element={<AdminDashboard/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
