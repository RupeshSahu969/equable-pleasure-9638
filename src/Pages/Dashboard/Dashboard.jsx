import React from 'react';
import { useSelector } from 'react-redux';
import DashNav from './Components/DashNav';
import DashReport from './Components/DashReport';

const Dashboard = () => {
  const projects = useSelector(store => store.activeProjects);

  return (
    <div style={{ backgroundColor: "#f2f6f8" }} >
      <DashNav />
      <DashReport projects={projects} />
    </div>
  );
};

export default Dashboard;