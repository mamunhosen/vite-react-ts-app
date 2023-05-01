import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export { WrappedApp as default, App };
