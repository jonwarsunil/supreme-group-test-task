import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './404';
import Header from './components/header';
import Footer from './components/footer';
import React, { Suspense } from 'react';
import Loading from './loading';

const Home = React.lazy(() => import('./components/home'));

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          {/* 404 Page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
