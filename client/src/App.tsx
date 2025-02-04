import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/Listpage';

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;