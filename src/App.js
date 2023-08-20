import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { Error } from './pages/Error';


function App() {
  return (
    <div className="App">
    <Routes>
     <Route path="/" element={<Main />}/>
     <Route path="/*" element={<Error />} />
    </Routes>
    </div>
  );
}

export default App;
