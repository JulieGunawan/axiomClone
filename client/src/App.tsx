import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ListPage from './pages/ListPage';
// import EditDeletePage from './pages/EditDeletePage';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/Listpage';

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        {/* <Route path="/edit" element={<EditDeletePage />} />
        <Route path="/delete" element={<EditDeletePage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;