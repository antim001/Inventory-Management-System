import {useAuth} from '../context/AuthContext.jsx'
import {useEffect} from 'react';
import {useNavigate} from 'react-router'
const Root =()=>{
   const {user} =useAuth();
   const navigate=useNavigate();
   useEffect(()=>{
      if(user){
        if(user.role==='admin'){
             naviate('/admin/dashboard')
        }else if(user.role==="customer"){
            navigate('customer/dashboard')
        }else{
            navigate('/login')
        }
      }
   },[user,navigate]);

   return null;
}
export default Root;