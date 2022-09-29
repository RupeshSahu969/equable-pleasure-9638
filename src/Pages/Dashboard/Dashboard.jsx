import React from 'react';
import DashNav from './Components/DashNav';
import DashReport from './Components/DashReport';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#f2f6f8" }} >
      <DashNav />
      <DashReport />
    </div>
  );
};

export default Dashboard;