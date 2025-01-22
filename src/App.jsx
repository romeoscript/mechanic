import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Admin = lazy(() => import("./pages/AdminPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/team" element={<TeamsPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;