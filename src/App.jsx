import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Admin = lazy(() => import("./pages/AdminPage"));

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" /> {/* Add Toaster here */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;