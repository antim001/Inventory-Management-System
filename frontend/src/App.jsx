
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router'
import Root from './components/Root'
import Login from './pages/Login.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
<Route path="/" element={<Root/>}/>
<Route path="/admin-dashboard" 
element={<ProtectedRoutes requireRole={['admin']}>Admin dashboard</ProtectedRoutes>}
  
>
  <Route index
  element={<h1>Summary of dashboard</h1>}/>

  </Route>
<Route path="/customer/dashboard" element={<h1>customer dashboard</h1>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/unauthorized" element={<h1 className='text-3xl text-red-600'>unauthorized user</h1>}/>

     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
