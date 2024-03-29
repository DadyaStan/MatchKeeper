import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import TablePage from './pages/TablePage/TablePage';
import TournamentPage from './pages/TournamentPage/TournamentPage';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='auth' element={<AuthPage />}/>
          <Route path='table' element={<TablePage />}/>
          <Route path='tournament' element={<TournamentPage />}/>
          {/* Not found page will be */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
