
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router'
import Root from './components/Root'
import Login from './pages/Login.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
<Route path="/" element={<Root/>}/>
<Route path="/admin/dashboard" element={<h1>Admin dashboard</h1>}/>
<Route path="/customer/dashboard" element={<h1>customer dashboard</h1>}/>
<Route path="/login" element={<Login/>}/>

     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
