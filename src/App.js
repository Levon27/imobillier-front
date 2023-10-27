import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header></Header>
            <h2> Home </h2>
          </>
        }>
        </Route>

        <Route path='/signup'
          element={<Register />}>
        </Route>

        <Route path='/login'
          element={<Login />}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
