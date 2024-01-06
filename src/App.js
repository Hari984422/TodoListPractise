import {BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Notes from './Notes';
import EditNotes from './EditNotes';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Notes/>}/>
      <Route path='/editnotes/:id' element={<EditNotes/>}/>
      
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
