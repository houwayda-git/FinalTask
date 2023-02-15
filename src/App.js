import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Labo from './components/Labo';
import Doctors from './components/Doctors';
import Pharma from './components/Pharma';
import Rdv from './components/Rdv';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from './components/Doctor';




function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/list' element={<Profile />} />
        <Route exact path='/labo' element={<Labo />} />
        <Route exact path='/doctors' element={<Doctors />} />
        <Route exact path='/Pharma' element={<Pharma />} />
        <Route exact path='/rdv' element={<Rdv />} />
        <Route exact path='/doctor' element={<Doctor />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
