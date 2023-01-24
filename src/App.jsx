import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Main from './Pages/Main';
import NotesList from './Pages/NotesList';



function App() {


  return (
    <div className="App">

      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/main' element={<Main />} />
          <Route path='/notes' element={<NotesList/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
