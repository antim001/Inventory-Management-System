import react from 'react';
import Sidebar from '../components/Sidebar.jsx'
import {Outlet} from 'react-router'
const Dashboard = () => {
    return <div>
        <div>
           <Sidebar/>
           <div>
            <Outlet/>
           </div>
        </div>
    </div>;
}



export default Dashboard;