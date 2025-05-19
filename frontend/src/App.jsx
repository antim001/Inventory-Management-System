import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router'; // ⬅️ Correct import
import Root from './components/Root';
import Login from './pages/Login.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import Dashboard from './pages/DashBoard.jsx';
import Categories from './components/Categories.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoutes requireRole={['admin']}>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          {/* ✅ Relative paths for nested routes */}
          <Route index element={<h1>Summary of dashboard</h1>} />
          <Route path="categories" element={<Categories />} />

           <Route path="products" element={<h1>products</h1>} />
            <Route path="orders" element={<h1>orders</h1>} />
             <Route path="suppliers" element={<h1>suppliers</h1>} />
              <Route path="users" element={<h1>users</h1>} />
        </Route>

        <Route path="/customer/dashboard" element={<h1>Customer Dashboard</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<h1 className="text-3xl text-red-600">Unauthorized User</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
