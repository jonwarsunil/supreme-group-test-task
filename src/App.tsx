import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about-us';
import NotFound from './404';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          {/* 404 Page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
