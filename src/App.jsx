import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import NotFound from './pages/NotFound';
import Weather from './pages/Weather';
import Box from './pages/Box';
import SignUp from './pages/Auth/SignUp';
import LoginUp from './pages/Auth/LoginUp';
import BuyProduct from './pages/BuyProduct';
import Product from './pages/Product';
import Profile from './pages/Profile';
import LearnMore from './pages/LearnMore';
import CartPage from './pages/Cart';
import { UserContext } from './Contaxt/UserContaxt';

// Protected route component
function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  // Redirect to LoginUp if user is not logged in
  if (!user?.isLogin) {
    return <Navigate to="/LoginUp" />;
  }

  return children;
}

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Login and Sign Up pages */}
        <Route path="/" element={<Outlet />}>
          <Route path="LoginUp" element={<LoginUp />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>

        {/* Protected routes with Header, only accessible if user is logged in */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>
                <Header />
                {/* Outlet renders the child routes defined under this route */}
                <Outlet />
                <footer className="py-3 bg-gray-100 justify-center items-center flex">
                  <h1>Footer</h1>
                </footer>
              </div>
            </ProtectedRoute>
          }
        >
          {/* Nested routes under the main layout */}
          <Route index element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="LearnMore" element={<LearnMore />} />
          <Route path="Box" element={<Box />} />
          <Route path="BuyProduct" element={<BuyProduct />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="Weather" element={<Weather />} />
        </Route>

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
