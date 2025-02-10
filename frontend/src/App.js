import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import User from './components/layout/User';
import Admin from './components/layout/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/shared/ScrollToTop';
function App() {


  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = User;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />;
          })
        }
      </Routes>
    </Router>
  );
}
export default App;
