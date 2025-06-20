import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="content">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
