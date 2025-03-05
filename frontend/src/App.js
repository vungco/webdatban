import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link , Navigate, useLocation } from 'react-router-dom';
import { publicRoutes } from './routes';
import User from './components/layout/User';
import Admin from './components/layout/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/shared/ScrollToTop';

function App() {

  const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    const location = useLocation();
  
    // Nếu không có token và không phải trang Login, điều hướng về /Login
    if (!token && location.pathname !== "/Login") {
      return <Navigate to="/Login" replace />;
    }
  
    return children;
  };
  
  return (
    <Router>
      <ScrollToTop />
      <RequireAuth>
        <Routes>
          {publicRoutes.map(({ path, component: Page, layout }, index) => {
            const Layout = layout ?? User;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* Nếu không tìm thấy route, điều hướng về Dashboard */}
          <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </RequireAuth>
    </Router>
  );
}
export default App;
