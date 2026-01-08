import {Link,Outlet} from "react-router-dom";



const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <Link to="settings">Go to Settings</Link>
         <Outlet />
    </div>
  );
};

export default Dashboard;